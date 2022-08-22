<?php

namespace App\Entity;

use App\Repository\ProductosRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=ProductosRepository::class)
 */
class Productos
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=45)
     */
    private $nombre;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $descripcion;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $codigo_barras;

    /**
     * @ORM\Column(type="string", length=100)
     */
    private $fabricante;

    /**
     * @ORM\Column(type="integer")
     */
    private $id_fabricante;

    /**
     * @ORM\Column(type="float")
     */
    private $precio;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNombre(): ?string
    {
        return $this->nombre;
    }

    public function setNombre(string $nombre): self
    {
        $this->nombre = $nombre;

        return $this;
    }

    public function getDescripcion(): ?string
    {
        return $this->descripcion;
    }

    public function setDescripcion(?string $descripcion): self
    {
        $this->descripcion = $descripcion;

        return $this;
    }

    public function getCodigoBarras(): ?string
    {
        return $this->codigo_barras;
    }

    public function setCodigoBarras(string $codigo_barras): self
    {
        $this->codigo_barras = $codigo_barras;

        return $this;
    }

    public function getFabricante(): ?string
    {
        return $this->fabricante;
    }

    public function setFabricante(string $fabricante): self
    {
        $this->fabricante = $fabricante;

        return $this;
    }

    public function getIdFabricante(): ?int
    {
        return $this->id_fabricante;
    }

    public function setIdFabricante(int $id_fabricante): self
    {
        $this->id_fabricante = $id_fabricante;

        return $this;
    }

    public function getPrecio(): ?float
    {
        return $this->precio;
    }

    public function setPrecio(float $precio): self
    {
        $this->precio = $precio;

        return $this;
    }
}
