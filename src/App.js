import { useState } from 'react';
import { useEffect } from 'react';
import { GeneralView } from './components/General/GeneralView';
import { ExperienceController } from './components/Experience/ExperienceController';
import { ExperienceView } from './components/Experience/ExperienceView';
import './App.css';
import { GeneralController } from './components/General/GeneralController';
import { SummaryController } from './components/Summary/SummaryController';
import { SummaryView } from './components/Summary/SummaryView';
import { CertificationsController } from './components/Certifications/CertificationsController';
import { CertificationsView } from './components/Certifications/CertificationsView';
import { EducTrainController } from './components/EduTrain.js/EducTrainController';
import { EducTrainView } from './components/EduTrain.js/EducTrainView';

const expArr = [{
  title: "Job title",
  company: "Company name",
  from: "From",
  to: "To",
  city: "City, Country",
  activ: "Key activities",
}];

const linkArr = [{
  contact: "Contact name",
  link: "Contact link",
}];

const certArr = [{
  name: "Certification name",
  link: "Link to a digital certificate",
}];

const educArr = [{
  univ: "University or training course",
  year: "Year of graduation / Years of study",
}];

function App() {

  //dealing with General section
  const [name, setName] = useState("First name, last name");
  const handleNameChange = (event) => {
    setName(event.target.value)
  }

  const [details, setDetails] = useState("Personal details");
  const handleDetailsChange = (event) => {
    setDetails(event.target.value)
  }

  const [image, setImage] = useState("");
  const handleImageChange = (event) => {
    console.log(URL.createObjectURL(event.target.files[0]))
    return (setImage(URL.createObjectURL(event.target.files[0])))
  }

  const [links, setLink] = useState(linkArr);
  const handleLinkChange = (event) => {
    const expIndex = parseInt(event.target.attributes[0].value);
    console.log(event.target.attributes)
    console.log(event.target.attributes[0].value)
    console.log(expIndex)
    const tempState = [...links];
    let tempElement = { ...tempState[expIndex] };
    console.log(tempElement[event.target.id])
    tempElement[event.target.id] = event.target.value;
    tempState[expIndex] = tempElement;
    setLink(tempState);
  }

  const addLink = () => {
    const newLink = {
      contact: "Contact name",
      link: "Contact link",
    }

    setLink((links) => {
      links = links.concat(newLink);
      return links;
    })
  }

   const remLink = (event) => {
    const remIndex = parseInt(event.target.attributes[0].value);
    console.log(remIndex)

    const filteredExp = (index) => {
      return (links.filter((item) => {
        return (links.indexOf(item)!==index)
      }))
    }

    setLink(links => {
      if (links.length > 1) {
        links = filteredExp(remIndex);
        return links
      } else {
        return links
      }
    });
  }
  
  const handleClick = (event) => {
    event.preventDefault();
    window.open(event.target.href, '_blank').focus();
  }
  
  // Dealing with Certifications stuff

  const [certs, setCert] = useState(certArr);
  const handleCertChange = (event) => {
    const expIndex = parseInt(event.target.attributes[0].value);

    const tempState = [...certs];
    let tempElement = { ...tempState[expIndex] };
   
    tempElement[event.target.id] = event.target.value;
    tempState[expIndex] = tempElement;
    setCert(tempState);
  }

  const addCert = () => {
    const newCert = {
      name: "Certification name",
      link: "Link to a digital certificate",
    }

    setCert((certs) => {
      certs = certs.concat(newCert);
      return certs;
    })
  }

  const remCert = (event) => {
    const remIndex = parseInt(event.target.attributes[0].value);
    console.log(remIndex)

    const filteredCert = (index) => {
      return (certs.filter((item) => {
        return (certs.indexOf(item)!==index)
      }))
    }

    setCert(certs => {
      if (certs.length > 1) {
        certs = filteredCert(remIndex);
        return certs
      } else {
        return certs
      }
    });
  }
  
  const handleCertClick = (event) => {
    event.preventDefault();
    window.open(event.target.href, '_blank').focus();
  }
  
  // dealing with Summary sections
  
  const [summary, setSummary] = useState("Short summary on how cool you are!");
  const handleSummaryChange = (event) => {
    setSummary(event.target.value)
  }
  
  // dealing with Experience sections

  const [experiences, setExperience] = useState(expArr);

  const handleExpChange = (event) => {
    const expIndex = parseInt(event.target.attributes[0].value);
    const tempState = [...experiences];
    const tempElement = { ...tempState[expIndex] };
    tempElement[event.target.id] = event.target.value;
    tempState[expIndex] = tempElement;

    setExperience(tempState)
  }

  const addExperience = () => {
    const newExp = {
      title: "Job title",
      company: "Company name",
      from: "From",
      to: "To",
      city: "City, Country",
      activ: "Key activities"
    }

    setExperience((experiences) => {
      experiences = experiences.concat(newExp);
      return experiences;
    })
  }

  const remExperience = (event) => {
    const remIndex = parseInt(event.target.attributes[0].value);
    console.log(remIndex)

    const filteredExp = (index) => {
      return (experiences.filter((item) => {
        return (experiences.indexOf(item)!==index)
      }))
    }

    setExperience(experiences => {
      if (experiences.length > 1) {
        experiences = filteredExp(remIndex);
        return experiences
      } else {
        return experiences
      }
    });
  }

  // Dealing with Education component

  const [educations, setEducation] = useState(educArr);

  const handleEducChange = (event) => {
    const expIndex = parseInt(event.target.attributes[0].value);
    const tempState = [...educations];
    const tempElement = { ...tempState[expIndex] };
    tempElement[event.target.id] = event.target.value;
    tempState[expIndex] = tempElement;

    setEducation(tempState)
  }

  const addEducation = () => {
    const newEduc = {
     univ: "University or training course",
     year: "Year of graduation / Years of study",
    }

    setEducation((educations) => {
      educations = educations.concat(newEduc);
      return educations;
    })
  }

  const remEducation = (event) => {
    const remIndex = parseInt(event.target.attributes[0].value);
    console.log(remIndex)

    const filteredEduc = (index) => {
      return (educations.filter((item) => {
        return (educations.indexOf(item)!==index)
      }))
    }

    setEducation(educations => {
      if (educations.length > 1) {
        educations = filteredEduc(remIndex);
        return educations
      } else {
        return educations
      }
    });
  }
  
  //____________________________________return part ____________________________________________________________

  return (
    <div className="App">
      <div className='controls'>

        <GeneralController name={name}
          onNameChange={handleNameChange}
          onDetailsChange={handleDetailsChange}
          onImageChange={handleImageChange}
          onLinkChange={handleLinkChange}
          addLink={addLink}
          remLink={remLink}
          links={links} />
        
        <SummaryController
          summary={ summary}
          onSummaryChange={ handleSummaryChange}/>

        <ExperienceController
          onChange={handleExpChange}
          addExperience={addExperience}
          remExperience ={remExperience}
          experiences={experiences} />
        
        <CertificationsController
          certs={certs}
          onCertChange={handleCertChange}
          addCert={addCert}
          remCert={remCert} />
        
        <EducTrainController
          onChange={handleEducChange}  
          addEducation={addEducation}
          remEducation={remEducation}
          educations={ educations } />
      </div>


      <div className='views'>
        <GeneralView
          image = {image}
          name={name}
          details={details}
          links={links}
          onClick={handleClick}
        />
        
        <SummaryView
          summary={ summary}
        />

        <ExperienceView
          experiences={experiences} />

        <CertificationsView
          certs={certs}
          onClick={handleCertClick} />
        
        <EducTrainView
          educations={educations } />
        
        
      </div>
    </div>
  );
}

export default App;
