import React from "react";
import Layout from "@theme/Layout";
import { useRouteMatch } from "@docusaurus/router";
import peopleData from "../data/people.json";

const PersonPage = () => {
    const match = useRouteMatch();
    const personId = match.params.id;
    const person = peopleData.find((p) => p.id === personId);

    if (!person) {
        return (
            <Layout title="Not Found">
                <div className="container">
                    <h1>Person Not Found</h1>
                    <p>Oops! The profile you are looking for does not exist.</p>
                </div>
            </Layout>
        );
    }

    return (
        <Layout title={person.name} description={person.role}>
            <div className="container">
                <h1>{person.name}</h1>
                <img
                    src={`/images/people/${person.avatar}`}
                    alt={person.name}
                    width="200"
                />
                <p><strong>{person.role}</strong></p>
                <p>{person.bio}</p>
                {person.contact && (
                    <p>
                        <a href={`mailto:${person.contact}`}>Contact: {person.contact}</a>
                    </p>
                )}
            </div>
        </Layout>
    );
};

export default PersonPage;
