<?php

namespace App\Controller;
use App\Entity\Productos;
use App\Repository\ProductosRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\EventListener\ResponseListener;


/* 
use App\Entity\Clientes;
use App\Repository\ClientesRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\EventListener\ResponseListener;
use Symfony\Component\Routing\Annotation\Route;
*/

/** 
* @Route("/api/productos")
*/

class ProductosController extends AbstractController
{
    /**  
     * @Route("/list" , name="app_productos_list" , methods={"GET"})
     */
    public function listProductos(ProductosRepository $productosRepository):Response
    {
        $productos = $productosRepository->findAll();
        $array_productos = array();

        foreach($productos as $productos) {
            $array_productos[] = array(
            'id' => $productos->getId(),
            'nombre' => $productos->getNombre(),
            'descripcion' => $productos->getDescripcion(),
            'codigo_barras' => $productos->getCodigoBarras(),
            'fabricante' => $productos->getFabricante(),
            'id_fabricante' => $productos->getIdFabricante(),
            'precio' => $productos->getPrecio(),
            );
        }
        
        return new JsonResponse($array_productos);
        
    }
    
    /**
     * @Route("/new", name="app_productos_new", methods={"POST"})
     */
    public function new(Request $request, ProductosRepository $productosRepository , EntityManagerInterface $em): Response 
    {
        $request = $this->transformJsonBody($request);
      
        if($this->CheckIfExist( $request->get('codigo_barras') , $productosRepository )){
            $productos = new Productos;
            $productos->setNombre($request->get('nombre')); 
            $productos->setDescripcion($request->get('descripcion')); 
            $productos->setCodigoBarras($request->get('codigo_barras')); 
            $productos->setFabricante($request->get('fabricante')); 
    
    
            $productos->setIdFabricante( (empty($request->get('id_fabricante')) ? 0 : $request->get('id_fabricante') )); 
            $productos->setPrecio($request->get('precio')); 
            $em->persist($productos);
            $em->flush();
    
            return new Response(
                'producto creado con exito', 
                Response::HTTP_OK
            );
        }else {
            return new Response(
                'producto ya existente', 
                Response::HTTP_OK
            );
        }

        

        
    }

    /**
     * @Route("/{id}", name="app_productos_show", methods={"GET"})
    */
    public function show($id , ProductosRepository $productosRepository)/* : JsonResponse */
    {
        $producto = $productosRepository->findOneBy(['id' => $id]);

        

        $data = [
            'id' => $producto->getId(),
            'nombre' => $producto->getNombre(),
            'descripcion' => $producto->getDescripcion(),
            'codigo_barras' => $producto->getCodigoBarras(),
            'fabricante' => $producto->getFabricante(),
            'precio' => $producto->getPrecio()
        ];

        return new JsonResponse($data, Response::HTTP_OK);
    }

    /**  
     * @Route("/{id}" , name="app_productos_update", methods={"PUT"})
    */

    public function updateProducto($id ,Request $request, ProductosRepository $productosRepository , EntityManagerInterface $em):Response 
    {
    //    dump($id);

       $producto = $productosRepository->findOneBy(['id' => $id]);


       $data = json_decode($request->getContent(),true);

    //    dump($data);

       empty($data['nombre']) ? true : $cliente->setNombre($data['nombre']);
       empty($data['descripcion']) ? true : $cliente->setDescripcion($data['descripcion']);
       empty($data['codigo_barras']) ? true : $cliente->setCodigoBarras($data['codigo_barras']);
       empty($data['fabricante']) ? true : $cliente->setFabricante($data['fabricante']);
       empty($data['precio']) ? true : $cliente->setPrecio($data['precio']);
       empty($data['phone_number']) ? true : $cliente->setPhoneNumber($data['phone_number']);

      $em->persist($producto);
      $em->flush();
   
        return new Response(
            'Producto actualizado', 
            Response::HTTP_OK
        );
    }

    /** 
     * @Route("/{id}", name="app_productos_delete", methods={"DELETE"})
    */
    public function deleteProducto($id , ProductosRepository $productosRepository , EntityManagerInterface $em):Response
    {
        $producto = $productosRepository->findOneBy(['id' => $id]);

        $em->remove($producto);
        $em->flush();

        return new JsonResponse(['status'=> 'producto eliminado'], Response::HTTP_NO_CONTENT);
    }

    

    
    protected function transformJsonBody(\Symfony\Component\HttpFoundation\Request $request)
    {
        $data = json_decode($request->getContent(), true);

        if (json_last_error() !== JSON_ERROR_NONE) {
            return null;
        }

        if ($data === null) {
            return $request;
        }

        $request->request->replace($data);

        return $request;
    }

    public function CheckIfExist($codigo_barras , $productosRepository):bool
    {
        $producto = $productosRepository->findOneBy(['codigo_barras' => $codigo_barras]);
        if(empty($producto)){
          return true;
        }else{
          return false;
        }
    }
}
