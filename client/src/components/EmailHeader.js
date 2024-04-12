import React, { useState, useEffect } from "react";
import emailjs from '@emailjs/browser';

function EmailHeader() {
    const [otp, setOtp] = useState('');

    const getPasscode = (e) => {
        // e.preventDefault();
        var college = document.getElementById('college').value;
        var email = document.getElementById('to_email').value;

        if(!email || !college) {
            alert('Email is required!');
            return;
        }
        else {
            if((college === 'acropolis' && email.endsWith('@acropolis.in')) ||
               (college === 'gsits' && email.endsWith('@sgsits.ac.in')) ||
               (college === 'dsce' && email.endsWith('@dsce.in'))) {
                
                // making and setting otp
                let result = '';
                const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
                const charactersLength = characters.length;
                let counter = 0;
                while (counter < 7) {
                result += characters.charAt(Math.floor(Math.random() * charactersLength));
                counter += 1;
                }
                setOtp(result);

                // make parameter object
                var template_params = {
                    'to_email': email,
                    'otp': result,
                    'to_name': email
                };

                // send the otp via mail
                emailjs.send('service_5autfdk', 'template_dk26d7b', template_params, 'janrr6kuBPsLT-9xF')
                .then((result) => {
                    console.log(result.text);
                    alert("Email sent. Please check your mail for the passcode and verify it below.");
                }, (error) => {
                    console.log(error.text);
                    alert("Whoops a daisy! An error has occurred! Please try again later.")
                });
            }
            else {
                alert('invalid college');
                return;
            }
        }
        return;
    }
    async function checkPasscode() {
        var otpEntered = document.getElementById('otp').value;
        if(otpEntered === otp) {
            alert('Passcode verified successfully :)');
        }
        else {
            alert('Incorrect passcode :(');
        }
    }
    return (
        <div className="form-div-otp">
            <form> 
                <select id="college" name="college" required>
                    <option id='none' name='none' disabled selected>Select your Institute</option>
                    <option id='acropolis' name='acropolis'>Acropolis Institute of Technology & Research</option>
                    <option id="gsits" name='gsits'>Govindram Seksaria Institute of Technology & Science</option>
                    <option id='dsce' name='dsce'>Dayanada Sagar College of Engineering</option>
                </select>
                <input type="email" placeholder="johnharvard@harvard.edu" name="to_mail" id="to_mail" required/>
                <button id='getBtn' name="getBtn" type='button' onClick={ (e) => getPasscode()}  >Get Passcode</button>
                <input type="password" placeholder="Enter passcode" name='otp' id='otp' required/>
                <button id='checkBtn' name="checkBtn" type='button' onClick={ checkPasscode() }>Verify</button>
            </form>
        </div>
    );
}

export default EmailHeader;