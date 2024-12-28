import React from 'react';

import {Container} from "react-bootstrap";
import DsnGrid from "../components/DsnGrid";

import HeaderNormalTow from "../components/header/HeaderNormalTow";
import InfoBox from "../components/contact/InfoBox";
import ContactForm from "../components/contact/ContactForm";


const headerContent = {
    title: 'Contact',
    description: `Lat's Tock`
}

function Contact(props) {

    const center = {lat: 30.0489206, lng: 31.258553};

    return (
        <React.Fragment>


            {/*Start Header*/}
            <HeaderNormalTow description={headerContent.description}>
                {headerContent.title}
            </HeaderNormalTow>


            {/*Start Contact Form && Info Box*/}
            <Container className="section-margin">
                <DsnGrid col={2} colTablet={1}>
                    <InfoBox className="background-section p-30"/>
                    <ContactForm/>
                </DsnGrid>
            </Container>

          

        </React.Fragment>
    );
}

export default Contact;