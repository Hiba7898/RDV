import React from 'react';
import { CCard, CCardBody, CCardHeader, CListGroup, CListGroupItem } from '@coreui/react';

const FAQList = () => {
  const faqs = [
    { question: 'How to book an appointment?', answer: 'Go to the Appointments tab and select a date and time.' },
    { question: 'How to cancel an appointment?', answer: 'You can cancel an appointment from your dashboard.' },
    { question: 'How to contact support?', answer: 'Use the support form to create a ticket or call us directly.' },
  ];

  return (
    <CCard>
      <CCardHeader>Frequently Asked Questions (FAQs)</CCardHeader>
      <CCardBody>
        <CListGroup>
          {faqs.map((faq, index) => (
            <CListGroupItem key={index}>
              <strong>{faq.question}</strong>
              <p>{faq.answer}</p>
            </CListGroupItem>
          ))}
        </CListGroup>
      </CCardBody>
    </CCard>
  );
};

export default FAQList;
