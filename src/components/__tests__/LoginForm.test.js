import React from 'react';
import LoginForm, {validateInput} from '../Auth/LoginForm';
import { render, fireEvent } from '@testing-library/react';
import {useHistory, push} from 'react-router-dom';




describe('login', ()=>{

    //can nest tests within tests
    // test('validate function should pass on correct input', ()=>{
    //     const text = 'text@test.com'
    //     expect(validateInput(text)).toBe(true);
    // })

    // test('validate function should fail on incorrect input', ()=> {
    //     const text = 'text';
    //     expect()
    // })

    test('login form should be in the document', ()=>{
        const component = render(<LoginForm {...push}/>)

    });

}) 

// describe is for multiple test suites