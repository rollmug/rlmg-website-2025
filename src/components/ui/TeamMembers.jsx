import React from "react";
import { TeamMember } from "./TeamMember";
import { ContentSection } from "../layout/ContentSection";

export const TeamMembers = ({ teamMembers, headerText }) => {
    return (
        <ContentSection standout={true}>
            <div className={`section-padded`}>
                {headerText && <h2 className="mt-4 mb-8 lg:mb-12">{headerText}</h2>}
                <div className="team-members grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 lg:gap-x-8 gap-y-6 lg:gap-y-12">
                    {teamMembers.map((member, index) => {
                        return (
                            <TeamMember key={index} {...member.staff_id} />
                        );
                    })}
                </div>
            </div>
        </ContentSection>
    );
};


export const sampleTeamMembers = [
    {
        "__typename": "block_teamMembers_staff",
        "staff_id": {
            "__typename": "staff",
            "id": "2dd47578-388d-40e2-92e1-5d0294583ea5",
            "firstName": "Richard",
            "jobTitle": "Founder",
            "lastName": "Lewis",
            "bio": "",
            "photo": {
                "__typename": "directus_files",
                "id": "34dd5344-1489-46f4-8692-e9e089940d5a",
                "filename_disk": "34dd5344-1489-46f4-8692-e9e089940d5a.jpg",
                "filename_download": "2017_0426_021227.jpg"
            }
        }
    },
    {
        "__typename": "block_teamMembers_staff",
        "staff_id": {
            "__typename": "staff",
            "id": "e35c8e1b-0c03-4dbd-8928-098f2db71fc6",
            "firstName": "Nancy",
            "jobTitle": "Executive Director/Head of Finance",
            "lastName": "Caulfield",
            "bio": null,
            "photo": {
                "__typename": "directus_files",
                "id": "99c0d4a1-b5d0-4680-917e-17d7750ee145",
                "filename_disk": "99c0d4a1-b5d0-4680-917e-17d7750ee145.jpg",
                "filename_download": "NancyCaulfield.jpg"
            }
        }
    },
    {
        "__typename": "block_teamMembers_staff",
        "staff_id": {
            "__typename": "staff",
            "id": "265175b8-c39f-4052-ba9e-971b2f97623f",
            "firstName": "Greg",
            "jobTitle": "Executive Director",
            "lastName": "Sprick",
            "bio": null,
            "photo": {
                "__typename": "directus_files",
                "id": "b6133e37-058e-4054-a1fb-1281d3b6b907",
                "filename_disk": "b6133e37-058e-4054-a1fb-1281d3b6b907.jpg",
                "filename_download": "2017_0425_013533.jpg"
            }
        }
    },
    {
        "__typename": "block_teamMembers_staff",
        "staff_id": {
            "__typename": "staff",
            "id": "5fe88903-35d9-4e22-bbaf-0931fdd7bf8b",
            "firstName": "Stephanie",
            "jobTitle": "Head of Creative",
            "lastName": "Stewart",
            "bio": "",
            "photo": {
                "__typename": "directus_files",
                "id": "92f088de-4576-4978-a249-e873d9d607b0",
                "filename_disk": "92f088de-4576-4978-a249-e873d9d607b0.jpg",
                "filename_download": "StephanieStewart_2024.jpg"
            }
        }
    },
    {
        "__typename": "block_teamMembers_staff",
        "staff_id": {
            "__typename": "staff",
            "id": "2dd47578-388d-40e2-92e1-5d0294583ea5",
            "firstName": "Richard",
            "jobTitle": "Founder",
            "lastName": "Lewis",
            "bio": "",
            "photo": {
                "__typename": "directus_files",
                "id": "34dd5344-1489-46f4-8692-e9e089940d5a",
                "filename_disk": "34dd5344-1489-46f4-8692-e9e089940d5a.jpg",
                "filename_download": "2017_0426_021227.jpg"
            }
        }
    },
    {
        "__typename": "block_teamMembers_staff",
        "staff_id": {
            "__typename": "staff",
            "id": "e35c8e1b-0c03-4dbd-8928-098f2db71fc6",
            "firstName": "Nancy",
            "jobTitle": "Executive Director/Head of Finance",
            "lastName": "Caulfield",
            "bio": null,
            "photo": {
                "__typename": "directus_files",
                "id": "99c0d4a1-b5d0-4680-917e-17d7750ee145",
                "filename_disk": "99c0d4a1-b5d0-4680-917e-17d7750ee145.jpg",
                "filename_download": "NancyCaulfield.jpg"
            }
        }
    },
    {
        "__typename": "block_teamMembers_staff",
        "staff_id": {
            "__typename": "staff",
            "id": "265175b8-c39f-4052-ba9e-971b2f97623f",
            "firstName": "Greg",
            "jobTitle": "Executive Director",
            "lastName": "Sprick",
            "bio": null,
            "photo": {
                "__typename": "directus_files",
                "id": "b6133e37-058e-4054-a1fb-1281d3b6b907",
                "filename_disk": "b6133e37-058e-4054-a1fb-1281d3b6b907.jpg",
                "filename_download": "2017_0425_013533.jpg"
            }
        }
    },
    {
        "__typename": "block_teamMembers_staff",
        "staff_id": {
            "__typename": "staff",
            "id": "5fe88903-35d9-4e22-bbaf-0931fdd7bf8b",
            "firstName": "Stephanie",
            "jobTitle": "Head of Creative",
            "lastName": "Stewart",
            "bio": "",
            "photo": {
                "__typename": "directus_files",
                "id": "92f088de-4576-4978-a249-e873d9d607b0",
                "filename_disk": "92f088de-4576-4978-a249-e873d9d607b0.jpg",
                "filename_download": "StephanieStewart_2024.jpg"
            }
        }
    }
];