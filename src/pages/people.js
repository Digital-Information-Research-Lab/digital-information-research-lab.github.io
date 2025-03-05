import React, { useState, useEffect } from "react";
import Layout from "@theme/Layout";

import piData from "../data/people/pi.json";
import gradData from "../data/people/grad.json";
import undergradData from "../data/people/undergrad.json";
import postdocData from "../data/people/postdoc.json";
import ProfileCard from "../components/people/ProfileCard";
import Headshot from "../components/people/Headshot";
import style from "../css/people.module.css";
import {BsEnvelopeFill, BsLinkedin} from "react-icons/bs";
import Markdown from "react-markdown";

const categories = [
    { title: "Principal Investigators", people: piData.sort((a, b) => a.joined - b.joined) },
    { title: "Postdoctoral Associates", people: postdocData.sort((a, b) => a.joined - b.joined) },
    { title: "Graduate Students", people: gradData.sort((a, b) => a.joined - b.joined) },
    { title: "Undergraduate Students", people: undergradData.sort((a, b) => a.joined - b.joined) }
];

export default function People() {
    const [selectedPerson, setSelectedPerson] = useState(null);
    const [isVisible, setIsVisible] = useState(false);

    const openPopup = (person) => {
        setSelectedPerson(person);
        document.body.style.overflow = "hidden";
        setTimeout(() => setIsVisible(true), 10);
    };

    const closePopup = () => {
        setIsVisible(false);
        setTimeout(() => {
            setSelectedPerson(null);
            document.body.style.overflow = "auto";
        }, 300);
    };

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === "Escape") closePopup();
        };

        if (selectedPerson) {
            document.addEventListener("keydown", handleKeyDown);
        } else {
            document.removeEventListener("keydown", handleKeyDown);
        }

        return () => document.removeEventListener("keydown", handleKeyDown);
    }, [selectedPerson]);

    return (
        <Layout
            title="People"
            description="View the faculty members of the Platform Governance Research Lab."
        >
            <div className="header">
                <div className="header-title">Meet The Team</div>
                <div className="header-subtitle">The People Driving Innovation and Impact</div>
            </div>
            <div className={`center ${selectedPerson ? "dimmed" : ""}`}>
                {categories.map(({ title, people }) => (
                    <div className="section" key={title}>
                        <div className="section-title">{title}</div>
                        <div className="people-container">
                            {people.map((person) => (
                                <div key={person.id} onClick={() => openPopup(person)}>
                                    <ProfileCard
                                        id={person.id}
                                        name={person.name}
                                        role={person.role}
                                        contact={person.contact}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/** Code for the popup modal */}
            {selectedPerson && (
                <div className={`modal-overlay ${isVisible ? "visible" : ""}`} onClick={closePopup}>
                    <div className={`modal-content ${isVisible ? "visible" : ""}`} onClick={(e) => e.stopPropagation()}>
                        <button className="close-button" onClick={closePopup}>×</button>
                        <div className="center center-text">
                            <Headshot id={selectedPerson.id} circle={true}/>
                            <div className={style.profileTitle}>
                                {selectedPerson.name}
                            </div>
                            <div className={style.profileDesc}>
                                {selectedPerson.role}
                            </div>
                            <div className={`${style.contact} center-text`}>
                                {selectedPerson.contact !== null ? (
                                    <a href={`mailto:${selectedPerson.contact}`}>
                                        <BsEnvelopeFill/> &nbsp; {selectedPerson.contact}
                                    </a>
                                ) : (
                                    <>
                                        <BsEnvelopeFill/> &nbsp; (-)
                                    </>
                                )}
                            </div>
                            <div className={`${style.contact} center-text`}>
                                {selectedPerson.linkedin !== null ? (
                                    <a href={`https://www.linkedin.com/in/${selectedPerson.linkedin}/`}>
                                        <BsLinkedin/> &nbsp; {selectedPerson.linkedin}
                                    </a>
                                ) : (
                                    <>
                                        <BsLinkedin/> &nbsp; (-)
                                    </>
                                )}
                            </div>
                        </div>
                        <div className="modal-body">
                            <Markdown>{selectedPerson.description || "No bio available."}</Markdown>
                        </div>
                    </div>
                </div>
            )}
        </Layout>
    );
}
