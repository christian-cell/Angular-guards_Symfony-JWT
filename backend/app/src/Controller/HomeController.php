<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;


/** 
*  @Route("home" , name="home" )
*/

class HomeController extends AbstractController
{
    /** 
    *  @Route("/saludo" , name="home_saludo" , methods={"GET"})
    */

    public function saludo():Response
    {
        return new Response(
            'Hola gente desde symfony y docker',
            Response::HTTP_OK
        );
    }
}
