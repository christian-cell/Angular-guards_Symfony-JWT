<?php

namespace App\Controller;

use App\Entity\Clientes;
use App\Repository\ClientesRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\EventListener\ResponseListener;
use Symfony\Component\Routing\Annotation\Route;

/** 
* @Route("/api/clientes")
*/

class ClientesController extends AbstractController
{
    /** 
    *  @Route("/saludo" , name="clientes_saludo" , methods={"GET"})
    */

    public function saludo():Response
    {
        return new Response(
            'Hola gente desde symfony y docker',
            Response::HTTP_OK
        );
    }

    /** 
    * @Route("/list" , name="clientes_list" , methods={"GET"}) 
    */
    public function GetClientes(ClientesRepository $clientesRepository):Response
    {
        $clientes= $clientesRepository->findAll();
        $array_clientes = array();
        
        foreach($clientes as $cliente){
            $array_clientes[] = array(
                'id' => $cliente->getId(),
                'nombre' => $cliente->getNombre(),
                'apellido_1' => $cliente->getApellido1(),
                'apellido_2' => $cliente->getApellido2(),
                'edad' => $cliente->getEdad(),
                'email' => $cliente->getEmail(),
                'phone_number' => $cliente->getPhoneNumber()
            );
        }

        return new JsonResponse($array_clientes);
    }

    /** 
    * @Route("/nuevo" , name="clientes_nuevo" , methods={"POST"}) 
    */

    public function CrearCliente(Request $request , ClientesRepository $clientesRepository , EntityManagerInterface $em):Response
    {
        $request = $this->transformJsonBody($request);

        $cliente = new Clientes;
        $cliente->setNombre($request->get('nombre'));
        $cliente->setApellido1($request->get('apellido_1'));
        $cliente->setApellido2($request->get('apellido_2'));
        $cliente->setEdad($request->get('edad'));
        $cliente->setEmail($request->get('email'));
        $cliente->setPhoneNumber($request->get('phone_number'));

        $em->persist($cliente);
        $em->flush();

        return new Response(
            'cliente creado con exito',
            Response::HTTP_OK
        ); 

        /* dump($request->get('nombre'));
        dump($request->get('apellido_1'));
        dump($request->get('apellido_2'));
        dump($request->get('edad')); */
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
}
