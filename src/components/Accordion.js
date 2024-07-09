// src/components/Accordion.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleAccordion } from '../actions';

// AccordionItem Component
const AccordionItem = ({ index, title, content }) => {
  const dispatch = useDispatch();
  const openIndex = useSelector(state => state.openIndex);

  const isOpen = openIndex === index;

  const handleToggle = () => {
    dispatch(toggleAccordion(index));
  };

  return (
    <div className="accordion-item">
      {/* Accordion Header */}
      <div className="accordion-header" onClick={handleToggle}>
        {title}
      </div>
      {/* Accordion Body with conditional rendering */}
      <div className="accordion-body" style={{ display: isOpen ? 'block' : 'none' }}>
        {content}
      </div>
    </div>
  );
};

// Accordion Component
const Accordion = () => {
  // Example accordion data
  const accordionData = [
    { title: "Section 1", content: "Content for section 1." },
    { title: "Section 2", content: "Content for section 2." },
    { title: "Section 3", content: "Content for section 3." }
  ];

  return (
    <div className="accordion">
      {/* Display every title of accordion with body */}
      {accordionData.map((item, index) => (
        <AccordionItem 
          key={index}
          index={index}
          title={item.title}
          content={item.content}
        />
      ))}
    </div>
  );
};

export default Accordion;
