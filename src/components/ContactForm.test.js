import React from "react";
import * as rtl from "@testing-library/react";
import ContactForm from "./ContactForm";
import userEvent from "@testing-library/user-event";

test("renders ContactForm without crashing", () => {
  rtl.render(<ContactForm />)
})

test("firstName field takes a name",()=>{
  const contactForm = rtl.render(<ContactForm/>)
  const firstNameInput = contactForm.getByPlaceholderText(/ed/i)
  userEvent.type(firstNameInput, "Rocky")
  expect(firstNameInput).toHaveValue("Rocky")
  
})

test("lastName field takes a name", ()=>{
  const contactForm = rtl.render(<ContactForm/>)
  const lastNameInput = contactForm.getByPlaceholderText(/bu/i)
  userEvent.type(lastNameInput,"Fierro")
  expect(lastNameInput).toHaveValue("Fierro")
})

test("email field takes a string for email", ()=>{
  const contactForm = rtl.render(<ContactForm/>)
  const emailInput = contactForm.getByTestId("email")
  userEvent.type(emailInput,"rocky@iLikeReact.com")
  expect(emailInput).toHaveValue("rocky@iLikeReact.com")
})

test("message text field takes a message", ()=>{
  const contactForm = rtl.render(<ContactForm/>)
  const messageInput = contactForm.getByTestId("message")
  userEvent.type(messageInput,"Who doesn't love testing react components with jest?!")
  expect(messageInput).toHaveValue("Who doesn't love testing react components with jest?!")
})

test("submit button works",()=>{
  const contactForm = rtl.render(<ContactForm/>)
  const button = contactForm.getByTestId("submit")
  userEvent.click(button)
})

