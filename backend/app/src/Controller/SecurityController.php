<?php

namespace App\Controller;

use App\Entity\User;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

/** 
* @Route("/registro" , name="user_registro" ) 
*/

class SecurityController extends AbstractController
{
    /** 
    * @Route("/nuevo" , name="_nuevo" , methods={"POST"}) 
    */
    public function CreateNewUser(Request $request , EntityManagerInterface $em , UserPasswordEncoderInterface $passwordEncoder):Response
    {

      $request = $this->transformJsonBody($request);
   
      $user = new User();
    
      if ($request->isMethod('POST')) {
        $user->setUsername($request->get("username"));
      
        $user->setPassword($passwordEncoder->encodePassword($user , $request->get("password")));

        $em->persist($user);
        $em->flush();

        return new Response(
            'cliente creado con exito',
            Response::HTTP_OK
        );
      }
      
      
        /* $user = new User();

        $form = $this->createForm(UserType::class, $user);
        $form->handleRequest($request);

        if ($request->isMethod('POST')) {

            try {
                $em = $this->getDoctrine()->getEntityManager();
                $em->persist($user);
                $em->flush();

                return new JsonResponse($user);
            } catch (\Exception $e) {
                return new JsonResponse($e->getMessage(), 500);
            }
        } */
    }

    /** 
    * @Route("/nuevo/get/{username}/{password}" , name="_nuevo_get" , methods={"GET"}) 
    */
    public function CreateUser($username , $password , UserRepository $userRepository , EntityManagerInterface $em , UserPasswordEncoderInterface $passwordEncoder):Response
    {
   
        $user = new User;

        
        $user->setEmail($username);
        $user->setUsername($username);
        $user->setPassword($passwordEncoder->encodePassword($user , $password));

        $em->persist($user);
        $em->flush();

        return new Response(
            'cliente creado con exito',
            Response::HTTP_OK
        );
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
