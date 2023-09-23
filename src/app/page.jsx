"use client";
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const AgregarLibro = () => {
  const [libros, setLibros] = useState([]);
  const [nuevoLibro, setNuevoLibro] = useState({
    nombre: '',
    autor: '',
    fechaPublicacion: '',
    estado: 'Disponible',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNuevoLibro({
      ...nuevoLibro,
      [name]: value,
    });
  };

  const agregarLibro = () => {
    // Verifica si alguno de los campos está vacío antes de agregar el libro
    if (
      nuevoLibro.nombre.trim() === '' ||
      nuevoLibro.autor.trim() === '' ||
      nuevoLibro.fechaPublicacion.trim() === ''
    ) {
      alert('Por favor, completa todos los campos antes de agregar un libro.');
      return;
    }

    setLibros([...libros, nuevoLibro]);
    setNuevoLibro({
      nombre: '',
      autor: '',
      fechaPublicacion: '',
      estado: 'Disponible',
    });
  };

  const eliminarLibro = (index) => {
    const nuevaListaLibros = [...libros];
    nuevaListaLibros.splice(index, 1);
    setLibros(nuevaListaLibros);
  };

  return (
    <div className="container">
      <h1 className="mt-4 text-center">Agregar Libro</h1>
      <div className="row">
        <div className="col-md-6">
          <form>
            <div className="form-group">
              <input
                type="text"
                className="form-control mt-2"
                placeholder="Nombre del libro"
                name="nombre"
                value={nuevoLibro.nombre}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control mt-2"
                placeholder="Autor del libro"
                name="autor"
                value={nuevoLibro.autor}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <input
                type="date"
                className="form-control mt-2"
                placeholder="Fecha de publicación"
                name="fechaPublicacion"
                value={nuevoLibro.fechaPublicacion}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <select
                className="form-control mt-2"
                name="estado"
                value={nuevoLibro.estado}
                onChange={handleChange}
              >
                <option value="Prestado">Prestado</option>
                <option value="Dañado">Dañado</option>
                <option value="Perdido">Perdido</option>
                <option value="Disponible">Disponible</option>
              </select>
            </div>
            <button
              type="button"
              className="btn btn-primary mt-2"
              onClick={agregarLibro}
            >
              Agregar Libro
            </button>
          </form>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-6">
          <ul className="list-group">
            {libros.map((libro, index) => (
              <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                {libro.nombre} - {libro.autor} - {libro.fechaPublicacion} - {libro.estado}
                <button
                  type="button"
                  className="btn btn-danger btn-sm"
                  onClick={() => eliminarLibro(index)}
                >
                  Eliminar
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AgregarLibro;
