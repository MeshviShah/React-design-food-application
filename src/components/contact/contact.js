import React from "react";
import Container from "react-bootstrap/esm/Container";
import { Header } from "../home/header";
import "../../assets/contact.css"
import Form from 'react-bootstrap/Form';
function Contact()
{
    return(
        
    <div>
    <Header />
    <Container>
        <div>
            <div>
            <h1>Get in touch</h1>
            </div>
        </div>
<div>
<p style={{"margin" : "5rem  20rem 0rem 20rem" , "color" : "#323336"}}>Have you got a suggestion or a blog post idea? Or maybe you represent a company and would like to work on a partnership? I would love to hear from you!</p>
<p style={{"margin" : "2rem  15rem 0rem 15rem" , "color" : "#323336"}}>info@thos.com <br></br>
123-456-7890</p>

</div> 
    </Container>
    <div>

    <form>
        Email:<br></br><input />

    </form>


    <Form>
    
    </Form>


</div>
    </div>)
}

export default Contact