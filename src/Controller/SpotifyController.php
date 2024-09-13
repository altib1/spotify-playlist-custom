<?php

namespace App\Controller;

use SpotifyWebAPI\SpotifyWebAPI;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class SpotifyController extends AbstractController
{
    public function __construct(
        private readonly SpotifyWebAPI $api
    ){
    }

    #[Route('/spotify', name: 'app_spotify')]
    public function index(): Response
    {
        $search = $this->api->search('Thriller', 'album');
        dd($search);

        return $this->render('spotify/index.html.twig', [
            'controller_name' => 'SpotifyController',
        ]);
    }
}
