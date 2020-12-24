import React from "react";

import { Button, Col, Form } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperclip } from "@fortawesome/free-solid-svg-icons";
import Widget from "../../Common/Widget";

const ContactPage = () => {
    return (
        <Widget id="contact-page" detail container>
            <h5>
                İletişim formunu kullanarak bizlere 7 gün 24 saat
        <br />
        ulaşabilir, görüş, öneri ve şikayetlerinizi iletebilirsiniz.
            </h5>

            <Form>
                <Form.Row>
                    <Col xs={12} md={12} lg={12}>
                        <Form.Group controlId="">
                            <Form.Label> AD VE SOYADINIZ * </Form.Label>
                            <Form.Control type="text" required />
                        </Form.Group>
                    </Col>
                </Form.Row>

                <Form.Row>
                    <Col xs={12} md={6} lg={6}>
                        <Form.Group controlId="">
                            <Form.Label> E-POSTA ADRESİNİZ * </Form.Label>
                            <Form.Control type="text" required />
                        </Form.Group>
                    </Col>

                    <Col xs={12} md={6} lg={6}>
                        <Form.Group controlId="">
                            <Form.Label> TELEFON NUMARANIZ * </Form.Label>
                            <Form.Control type="text" required />
                        </Form.Group>
                    </Col>
                </Form.Row>

                <Form.Row>
                    <Col xs={12} md={6} lg={6}>
                        <Form.Group controlId="">
                            <Form.Label> ŞİRKET İSMİ * </Form.Label>
                            <Form.Control type="text" required />
                        </Form.Group>
                    </Col>

                    <Col xs={12} md={6} lg={6}>
                        <Form.Group controlId="">
                            <Form.Label> DEPARTMAN * </Form.Label>
                            <Form.Control as="select" required />
                        </Form.Group>
                    </Col>
                </Form.Row>

                <Form.Row>
                    <Col xs={12} md={12} lg={12}>
                        <Form.Group controlId="">
                            <Form.Label> MESAJINIZ * </Form.Label>
                            <Form.Control as="textarea" required />
                        </Form.Group>
                    </Col>
                </Form.Row>


                <Form.Row>
                    <Button className="add-file-button col-md-5">
                        <FontAwesomeIcon icon={faPaperclip} />
                        {' '}
                    DOSYA EKLE
                </Button>

                    <Button type="submit" className="send-form-button col-md-5 offset-md-2">
                        GÖNDER
                </Button>
                </Form.Row>

            </Form>

            <h4>
                Gelişmiş destek sistemi şimdi Pointo’da!
        <br />
        Şimdi <span style={{ color: '#ef4923' }}>destek talebi</span> oluştur, çözüme kavuşturalım.
    </h4>


        </Widget>


    )
};

export default ContactPage;