import React, { useState } from 'react'
import styled from 'styled-components'
import tonicas from '../intervalos'



const Intervalos = styled.div`


    .col-6{

        border: 0.5px solid gray;
        border-radius: 3px;
    }

    .linha:hover{

        background-color: #97f57a;
        border: blue 1px solid;
        cursor: pointer;
    }

    .c{

        background-color: red;
    }

    span:hover{

        background-color: #0099ff;
        cursor: pointer;
    }





`

export default props => {

    console.log(tonicas)

    const [root, setRoot] = useState(tonicas.c.tonica)
    const [tonica, setTonica] = useState(tonicas.c.tonica)
    const [segundaMenor, setSegundaMenor] = useState(tonicas.c.segundaMenor)
    const [segundaMaior, setSegundaMaior] = useState(tonicas.c.segundaMaior)
    const [tercaMenor, setTercaMenor] = useState(tonicas.c.tercaMenor)
    const [tercaMaior, setTercaMaior] = useState(tonicas.c.tercaMaior)
    const [quartaJusta, setQuartaJusta] = useState(tonicas.c.quartaJusta)
    const [quartaAumentada, setQuartaAumentada] = useState(tonicas.c.quartaAumentada)
    const [quintaJusta, setQuintaJusta] = useState(tonicas.c.quintaJusta)
    const [quintaAumentada, setQuintaAumentada] = useState(tonicas.c.quintaAumentada)
    const [sextaMenor, setSextaMenor] = useState(tonicas.c.sextaMenor)
    const [sextaMaior, setSextaMaior] = useState(tonicas.c.sextaMaior)
    const [setimaMenor, setSetimaMenor] = useState(tonicas.c.setimaMenor)
    const [setimaMaior, setSetimaMaior] = useState(tonicas.c.setimaMaior)



    function changeRoot(e) {

        setRoot(e.target.value)
    }

    function buscar() {

        setTonica(root)

        if (root == 'G' || root == 'g') {

            setTonica(tonicas.g.tonica)
            setSegundaMenor(tonicas.g.segundaMenor)
            setSegundaMaior(tonicas.g.segundaMaior)
            setTercaMenor(tonicas.g.tercaMenor)
            setTercaMaior(tonicas.g.tercaMaior)
            setQuartaJusta(tonicas.g.quartaJusta)
            setQuartaAumentada(tonicas.g.quartaAumentada)
            setQuintaJusta(tonicas.g.quintaJusta)
            setQuintaAumentada(tonicas.g.quintaAumentada)
            setSextaMenor(tonicas.g.sextaMenor)
            setSextaMaior(tonicas.g.sextaMaior)
            setSetimaMenor(tonicas.g.setimaMenor)
            setSetimaMaior(tonicas.g.setimaMaior)

        } else if (root == 'D' || root == 'd') {

            setTonica(tonicas.d.tonica)
            setSegundaMenor(tonicas.d.segundaMenor)
            setSegundaMaior(tonicas.d.segundaMaior)
            setTercaMenor(tonicas.d.tercaMenor)
            setTercaMaior(tonicas.d.tercaMaior)
            setQuartaJusta(tonicas.d.quartaJusta)
            setQuartaAumentada(tonicas.d.quartaAumentada)
            setQuintaJusta(tonicas.d.quintaJusta)
            setQuintaAumentada(tonicas.d.quintaAumentada)
            setSextaMenor(tonicas.d.sextaMenor)
            setSextaMaior(tonicas.d.sextaMaior)
            setSetimaMenor(tonicas.d.setimaMenor)
            setSetimaMaior(tonicas.d.setimaMaior)


        } else if (root == 'A' || root == 'a') {

            setTonica(tonicas.a.tonica)
            setSegundaMenor(tonicas.a.segundaMenor)
            setSegundaMaior(tonicas.a.segundaMaior)
            setTercaMenor(tonicas.a.tercaMenor)
            setTercaMaior(tonicas.a.tercaMaior)
            setQuartaJusta(tonicas.a.quartaJusta)
            setQuartaAumentada(tonicas.a.quartaAumentada)
            setQuintaJusta(tonicas.a.quintaJusta)
            setQuintaAumentada(tonicas.a.quintaAumentada)
            setSextaMenor(tonicas.a.sextaMenor)
            setSextaMaior(tonicas.a.sextaMaior)
            setSetimaMenor(tonicas.a.setimaMenor)
            setSetimaMaior(tonicas.a.setimaMaior)


        } else if (root == 'C' || root == 'c') {

            setTonica(tonicas.c.tonica)
            setSegundaMenor(tonicas.c.segundaMenor)
            setSegundaMaior(tonicas.c.segundaMaior)
            setTercaMenor(tonicas.c.tercaMenor)
            setTercaMaior(tonicas.c.tercaMaior)
            setQuartaJusta(tonicas.c.quartaJusta)
            setQuartaAumentada(tonicas.c.quartaAumentada)
            setQuintaJusta(tonicas.c.quintaJusta)
            setQuintaAumentada(tonicas.c.quintaAumentada)
            setSextaMenor(tonicas.c.sextaMenor)
            setSextaMaior(tonicas.c.sextaMaior)
            setSetimaMenor(tonicas.c.setimaMenor)
            setSetimaMaior(tonicas.c.setimaMaior)


        } else if (root == 'E' || root == 'e') {

            setTonica(tonicas.e.tonica)
            setSegundaMenor(tonicas.e.segundaMenor)
            setSegundaMaior(tonicas.e.segundaMaior)
            setTercaMenor(tonicas.e.tercaMenor)
            setTercaMaior(tonicas.e.tercaMaior)
            setQuartaJusta(tonicas.e.quartaJusta)
            setQuartaAumentada(tonicas.e.quartaAumentada)
            setQuintaJusta(tonicas.e.quintaJusta)
            setQuintaAumentada(tonicas.e.quintaAumentada)
            setSextaMenor(tonicas.e.sextaMenor)
            setSextaMaior(tonicas.e.sextaMaior)
            setSetimaMenor(tonicas.e.setimaMenor)
            setSetimaMaior(tonicas.e.setimaMaior)


        } else if (root == 'B' || root == 'b') {

            setTonica(tonicas.b.tonica)
            setSegundaMenor(tonicas.b.segundaMenor)
            setSegundaMaior(tonicas.b.segundaMaior)
            setTercaMenor(tonicas.b.tercaMenor)
            setTercaMaior(tonicas.b.tercaMaior)
            setQuartaJusta(tonicas.b.quartaJusta)
            setQuartaAumentada(tonicas.b.quartaAumentada)
            setQuintaJusta(tonicas.b.quintaJusta)
            setQuintaAumentada(tonicas.b.quintaAumentada)
            setSextaMenor(tonicas.b.sextaMenor)
            setSextaMaior(tonicas.b.sextaMaior)
            setSetimaMenor(tonicas.b.setimaMenor)
            setSetimaMaior(tonicas.b.setimaMaior)

        } else if (root == 'F' || root == 'f') {

            setTonica(tonicas.f.tonica)
            setSegundaMenor(tonicas.f.segundaMenor)
            setSegundaMaior(tonicas.f.segundaMaior)
            setTercaMenor(tonicas.f.tercaMenor)
            setTercaMaior(tonicas.f.tercaMaior)
            setQuartaJusta(tonicas.f.quartaJusta)
            setQuartaAumentada(tonicas.f.quartaAumentada)
            setQuintaJusta(tonicas.f.quintaJusta)
            setQuintaAumentada(tonicas.f.quintaAumentada)
            setSextaMenor(tonicas.f.sextaMenor)
            setSextaMaior(tonicas.f.sextaMaior)
            setSetimaMenor(tonicas.f.setimaMenor)
            setSetimaMaior(tonicas.f.setimaMaior)

        } else if (root == 'Bb' || root == 'bb') {

            setTonica(tonicas.bb.tonica)
            setSegundaMenor(tonicas.bb.segundaMenor)
            setSegundaMaior(tonicas.bb.segundaMaior)
            setTercaMenor(tonicas.bb.tercaMenor)
            setTercaMaior(tonicas.bb.tercaMaior)
            setQuartaJusta(tonicas.bb.quartaJusta)
            setQuartaAumentada(tonicas.bb.quartaAumentada)
            setQuintaJusta(tonicas.bb.quintaJusta)
            setQuintaAumentada(tonicas.bb.quintaAumentada)
            setSextaMenor(tonicas.bb.sextaMenor)
            setSextaMaior(tonicas.bb.sextaMaior)
            setSetimaMenor(tonicas.bb.setimaMenor)
            setSetimaMaior(tonicas.bb.setimaMaior)

        } else if (root == 'Eb' || root == 'eb') {

            setTonica(tonicas.eb.tonica)
            setSegundaMenor(tonicas.eb.segundaMenor)
            setSegundaMaior(tonicas.eb.segundaMaior)
            setTercaMenor(tonicas.eb.tercaMenor)
            setTercaMaior(tonicas.eb.tercaMaior)
            setQuartaJusta(tonicas.eb.quartaJusta)
            setQuartaAumentada(tonicas.eb.quartaAumentada)
            setQuintaJusta(tonicas.eb.quintaJusta)
            setQuintaAumentada(tonicas.eb.quintaAumentada)
            setSextaMenor(tonicas.eb.sextaMenor)
            setSextaMaior(tonicas.eb.sextaMaior)
            setSetimaMenor(tonicas.eb.setimaMenor)
            setSetimaMaior(tonicas.eb.setimaMaior)

        } else if (root == 'Ab' || root == 'ab') {

            setTonica(tonicas.ab.tonica)
            setSegundaMenor(tonicas.ab.segundaMenor)
            setSegundaMaior(tonicas.ab.segundaMaior)
            setTercaMenor(tonicas.ab.tercaMenor)
            setTercaMaior(tonicas.ab.tercaMaior)
            setQuartaJusta(tonicas.ab.quartaJusta)
            setQuartaAumentada(tonicas.ab.quartaAumentada)
            setQuintaJusta(tonicas.ab.quintaJusta)
            setQuintaAumentada(tonicas.ab.quintaAumentada)
            setSextaMenor(tonicas.ab.sextaMenor)
            setSextaMaior(tonicas.ab.sextaMaior)
            setSetimaMenor(tonicas.ab.setimaMenor)
            setSetimaMaior(tonicas.ab.setimaMaior)

        } else if (root == 'Db' || root == 'db') {

            setTonica(tonicas.db.tonica)
            setSegundaMenor(tonicas.db.segundaMenor)
            setSegundaMaior(tonicas.db.segundaMaior)
            setTercaMenor(tonicas.db.tercaMenor)
            setTercaMaior(tonicas.db.tercaMaior)
            setQuartaJusta(tonicas.db.quartaJusta)
            setQuartaAumentada(tonicas.db.quartaAumentada)
            setQuintaJusta(tonicas.db.quintaJusta)
            setQuintaAumentada(tonicas.db.quintaAumentada)
            setSextaMenor(tonicas.db.sextaMenor)
            setSextaMaior(tonicas.db.sextaMaior)
            setSetimaMenor(tonicas.db.setimaMenor)
            setSetimaMaior(tonicas.db.setimaMaior)

        } else if (root == 'Gb' || root == 'gb') {

            setTonica(tonicas.gb.tonica)
            setSegundaMenor(tonicas.gb.segundaMenor)
            setSegundaMaior(tonicas.gb.segundaMaior)
            setTercaMenor(tonicas.gb.tercaMenor)
            setTercaMaior(tonicas.gb.tercaMaior)
            setQuartaJusta(tonicas.gb.quartaJusta)
            setQuartaAumentada(tonicas.gb.quartaAumentada)
            setQuintaJusta(tonicas.gb.quintaJusta)
            setQuintaAumentada(tonicas.gb.quintaAumentada)
            setSextaMenor(tonicas.gb.sextaMenor)
            setSextaMaior(tonicas.gb.sextaMaior)
            setSetimaMenor(tonicas.gb.setimaMenor)
            setSetimaMaior(tonicas.gb.setimaMaior)

        } else if (root == 'C#' || root == 'c#') {

            setTonica(tonicas.cs.tonica)
            setSegundaMenor(tonicas.cs.segundaMenor)
            setSegundaMaior(tonicas.cs.segundaMaior)
            setTercaMenor(tonicas.cs.tercaMenor)
            setTercaMaior(tonicas.cs.tercaMaior)
            setQuartaJusta(tonicas.cs.quartaJusta)
            setQuartaAumentada(tonicas.cs.quartaAumentada)
            setQuintaJusta(tonicas.cs.quintaJusta)
            setQuintaAumentada(tonicas.cs.quintaAumentada)
            setSextaMenor(tonicas.cs.sextaMenor)
            setSextaMaior(tonicas.cs.sextaMaior)
            setSetimaMenor(tonicas.cs.setimaMenor)
            setSetimaMaior(tonicas.cs.setimaMaior)

        } else if (root == 'G#' || root == 'g#') {

            setTonica(tonicas.gs.tonica)
            setSegundaMenor(tonicas.gs.segundaMenor)
            setSegundaMaior(tonicas.gs.segundaMaior)
            setTercaMenor(tonicas.gs.tercaMenor)
            setTercaMaior(tonicas.gs.tercaMaior)
            setQuartaJusta(tonicas.gs.quartaJusta)
            setQuartaAumentada(tonicas.gs.quartaAumentada)
            setQuintaJusta(tonicas.gs.quintaJusta)
            setQuintaAumentada(tonicas.gs.quintaAumentada)
            setSextaMenor(tonicas.gs.sextaMenor)
            setSextaMaior(tonicas.gs.sextaMaior)
            setSetimaMenor(tonicas.gs.setimaMenor)
            setSetimaMaior(tonicas.gs.setimaMaior)

        } else if (root == 'D#' || root == 'D#') {

            setTonica(tonicas.ds.tonica)
            setSegundaMenor(tonicas.ds.segundaMenor)
            setSegundaMaior(tonicas.ds.segundaMaior)
            setTercaMenor(tonicas.ds.tercaMenor)
            setTercaMaior(tonicas.ds.tercaMaior)
            setQuartaJusta(tonicas.ds.quartaJusta)
            setQuartaAumentada(tonicas.ds.quartaAumentada)
            setQuintaJusta(tonicas.ds.quintaJusta)
            setQuintaAumentada(tonicas.ds.quintaAumentada)
            setSextaMenor(tonicas.ds.sextaMenor)
            setSextaMaior(tonicas.ds.sextaMaior)
            setSetimaMenor(tonicas.ds.setimaMenor)
            setSetimaMaior(tonicas.ds.setimaMaior)

        } else if (root == 'A#' || root == 'a#') {

            setTonica(tonicas.as.tonica)
            setSegundaMenor(tonicas.as.segundaMenor)
            setSegundaMaior(tonicas.as.segundaMaior)
            setTercaMenor(tonicas.as.tercaMenor)
            setTercaMaior(tonicas.as.tercaMaior)
            setQuartaJusta(tonicas.as.quartaJusta)
            setQuartaAumentada(tonicas.as.quartaAumentada)
            setQuintaJusta(tonicas.as.quintaJusta)
            setQuintaAumentada(tonicas.as.quintaAumentada)
            setSextaMenor(tonicas.as.sextaMenor)
            setSextaMaior(tonicas.as.sextaMaior)
            setSetimaMenor(tonicas.as.setimaMenor)
            setSetimaMaior(tonicas.as.setimaMaior)

        } else if (root == 'F#' || root == 'f#') {

            setTonica(tonicas.fs.tonica)
            setSegundaMenor(tonicas.fs.segundaMenor)
            setSegundaMaior(tonicas.fs.segundaMaior)
            setTercaMenor(tonicas.fs.tercaMenor)
            setTercaMaior(tonicas.fs.tercaMaior)
            setQuartaJusta(tonicas.fs.quartaJusta)
            setQuartaAumentada(tonicas.fs.quartaAumentada)
            setQuintaJusta(tonicas.fs.quintaJusta)
            setQuintaAumentada(tonicas.fs.quintaAumentada)
            setSextaMenor(tonicas.fs.sextaMenor)
            setSextaMaior(tonicas.fs.sextaMaior)
            setSetimaMenor(tonicas.fs.setimaMenor)
            setSetimaMaior(tonicas.fs.setimaMaior)
        }

    }


    return (

        <Intervalos>

            <div className="container-fluid m-2">

                <div className="row">
                    <div className="col-12">

                        <div className="card">



                            <div className="card-header">

                                <input type="text" placeholder="Tônica" onChange={changeRoot} />
                                <button className="btn btn-block btn-danger mt-3" onClick={buscar}>Buscar</button>

                                <div className="card-title">

                                    <h3 className="text-danger text-center">Intervalos</h3>

                                </div>

                                <div className="card-subtitle">

                                    <h2 className="text-center text-danger"><span className="badge badge-warning">{tonica}</span></h2>
                                </div>



                            </div>

                            <div className="card-body">

                                <div className="container">
                                    <div className="row linha">
                                        <div className="col-6">

                                            <h3 className="text-dark">Tônica <span className="badge badge-info">(T)</span></h3>
                                        </div>

                                        <div className="col-6">
                                            <h3 className="text-dark"><span className="badge badge-dark">{tonica}</span></h3>
                                        </div>
                                    </div>

                                    <div className="row linha">
                                        <div className="col-6">

                                            <h3 className="text-dark">Segunda menor <span className="badge badge-info">(b2)</span></h3>
                                        </div>

                                        <div className="col-6">
                                            <h3 className="text-dark"><span className="badge badge-dark">{segundaMenor}</span></h3>
                                        </div>
                                    </div>

                                    <div className="row linha">
                                        <div className="col-6">

                                            <h3 className="text-dark">Segunda maior <span className="badge badge-info">(2)</span></h3>
                                        </div>

                                        <div className="col-6">
                                            <h3 className="text-dark"><span className="badge badge-dark">{segundaMaior}</span></h3>
                                        </div>
                                    </div>

                                    <div className="row linha">
                                        <div className="col-6">

                                            <h3 className="text-dark">Terça menor <span className="badge badge-info">(b3)</span></h3>
                                        </div>

                                        <div className="col-6">
                                            <h3 className="text-dark"><span className="badge badge-dark">{tercaMenor}</span></h3>
                                        </div>
                                    </div>

                                    <div className="row linha">
                                        <div className="col-6">

                                            <h3 className="text-dark">Terça maior <span className="badge badge-info">(b3)</span></h3>
                                        </div>

                                        <div className="col-6 linha">
                                            <h3 className="text-dark"><span className="badge badge-dark">{tercaMaior}</span></h3>
                                        </div>
                                    </div>

                                    <div className="row linha">
                                        <div className="col-6">

                                            <h3 className="text-dark">Quarta justa <span className="badge badge-info">(4)</span></h3>
                                        </div>

                                        <div className="col-6">
                                            <h3 className="text-dark"><span className="badge badge-dark">{quartaJusta}</span></h3>
                                        </div>
                                    </div>

                                    <div className="row linha">
                                        <div className="col-6">

                                            <h3 className="text-dark">Quarta aumentada <span className="badge badge-info">(#4)</span></h3>
                                        </div>

                                        <div className="col-6">
                                            <h3 className="text-dark"><span className="badge badge-dark">{quartaAumentada}</span></h3>
                                        </div>
                                    </div>

                                    <div className="row linha">
                                        <div className="col-6">

                                            <h3 className="text-dark">Quinta justa <span className="badge badge-info">(5)</span></h3>
                                        </div>

                                        <div className="col-6">
                                            <h3 className="text-dark"><span className="badge badge-dark">{quintaJusta}</span></h3>
                                        </div>
                                    </div>

                                    <div className="row linha">
                                        <div className="col-6">

                                            <h3 className="text-dark">Quinta aumentada <span className="badge badge-info">(#5)</span></h3>
                                        </div>

                                        <div className="col-6">
                                            <h3 className="text-dark"><span className="badge badge-dark">{quintaAumentada}</span></h3>
                                        </div>
                                    </div>

                                    <div className="row linha">
                                        <div className="col-6">

                                            <h3 className="text-dark">Sexta menor <span className="badge badge-info">(b6)</span></h3>
                                        </div>

                                        <div className="col-6">
                                            <h3 className="text-dark"><span className="badge badge-dark">{sextaMenor}</span></h3>
                                        </div>
                                    </div>

                                    <div className="row linha">
                                        <div className="col-6">

                                            <h3 className="text-dark">Sexta maior <span className="badge badge-info">(6)</span></h3>
                                        </div>

                                        <div className="col-6">
                                            <h3 className="text-dark"><span className="badge badge-dark">{sextaMaior}</span></h3>
                                        </div>
                                    </div>

                                    <div className="row linha">
                                        <div className="col-6">

                                            <h3 className="text-dark">Sétima menor <span className="badge badge-info">(b7)</span></h3>
                                        </div>

                                        <div className="col-6">
                                            <h3 className="text-dark"><span className="badge badge-dark">{setimaMenor}</span></h3>
                                        </div>
                                    </div>

                                    <div className="row linha">
                                        <div className="col-6">

                                            <h3 className="text-dark">Sétima maior <span className="badge badge-info">(b7)</span></h3>
                                        </div>

                                        <div className="col-6">
                                            <h3 className="text-dark"><span className="badge badge-dark">{setimaMaior}</span></h3>
                                        </div>
                                    </div>


                                </div>




                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </Intervalos>
    )
}