"use client";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Ai } from "@/icons/ai";
import { Warframe } from "@/types/types";
import { Sparkles } from "lucide-react";
import React, { useState } from "react";

const AiTab = () => {
  const [userInput, setUserInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [components, setComponents] = useState<Warframe[]>([
    {
      id: "123",
      warframe_name: "sayan",
      warframe_image: "ai image",
      warframe: JSON.stringify({
        id: "f9e3a8d1-2b4c-4a6e-9d5f-3b7a1c9d2f0a",
        name: "Section",
        styles: {
          backgroundPosition: "center",
          objectFit: "cover",
          backgroundRepeat: "no-repeat",
          textAlign: "left",
          opacity: "100%",
        },
        type: "section",
        content: [
          {
            content: [
              {
                content: [
                  {
                    content: {
                      src: "/sayan.png",
                      alt: "Your Name",
                    },
                    id: "a1b2c3d4-e5f6-4789-9012-3456789abcdef",
                    name: "Image",
                    styles: {
                      width: "150px",
                      height: "150px",
                      borderRadius: "50%",
                      marginBottom: "20px",
                    },
                    type: "image",
                  },
                  {
                    content: {
                      innerText: "👋 Hi, I'm [Your Name]",
                    },
                    id: "b2c3d4e5-f6a7-489a-9123-456789abcdef0",
                    name: "Text",
                    styles: {
                      color: "#333",
                      fontSize: "32px",
                      fontWeight: "bold",
                      textAlign: "center",
                    },
                    type: "text",
                  },
                  {
                    content: {
                      innerText: "I'm a passionate [Your Profession] dedicated to creating innovative and user-friendly solutions.",
                    },
                    id: "c3d4e5f6-a7b8-49ab-9234-56789abcdef01",
                    name: "Text",
                    styles: {
                      color: "#555",
                      fontSize: "18px",
                      textAlign: "center",
                      marginBottom: "30px",
                    },
                    type: "text",
                  },
                  {
                    content: [
                      {
                        content: {
                          innerText: "View My Work",
                        },
                        id: "d4e5f6a7-b8c9-4abc-9345-6789abcdef012",
                        name: "Link",
                        styles: {
                          color: "#fff",
                          backgroundColor: "#007bff",
                          padding: "12px 24px",
                          borderRadius: "5px",
                          textDecoration: "none",
                          display: "inline-block",
                        },
                        type: "link",
                      },
                      {
                        content: {
                          innerText: "Contact Me",
                        },
                        id: "e5f6a7b8-c9da-4bcd-9456-789abcdef0123",
                        name: "Link",
                        styles: {
                          color: "#007bff",
                          backgroundColor: "#fff",
                          padding: "12px 24px",
                          borderRadius: "5px",
                          textDecoration: "none",
                          display: "inline-block",
                          border: "1px solid #007bff",
                          marginLeft: "10px",
                        },
                        type: "link",
                      },
                    ],
                    id: "f6a7b8c9-dadb-4def-9567-89abcdef01234",
                    name: "Container",
                    styles: {
                      textAlign: "center",
                    },
                    type: "container",
                  },
                ],
                id: "0a1b2c3d-4e5f-4a7b-8c9d-0123456789abc",
                name: "Container",
                styles: {
                  maxWidth: "700px",
                  margin: "0 auto",
                  padding: "40px",
                },
                type: "container",
              },
            ],
            id: "1b2c3d4e-5f6a-4b8c-9da0-23456789abcdef",
            name: "Container",
            styles: {
              maxWidth: "940px",
              opacity: 1,
              borderRadius: "0px",
            },
            type: "container",
          },
          {
            id: "2c3d4e5f-6a7b-4c9d-a0b1-3456789abcdef0",
            name: "Section",
            styles: {
              backgroundPosition: "center",
              objectFit: "cover",
              backgroundRepeat: "no-repeat",
              textAlign: "left",
              opacity: "100%",
            },
            type: "section",
            content: [
              {
                id: "3d4e5f6a-7b8c-4dae-a1b2-456789abcdef01",
                name: "Two Columns",
                styles: {
                  backgroundPosition: "center",
                  objectFit: "cover",
                  backgroundRepeat: "no-repeat",
                  textAlign: "left",
                  opacity: "100%",
                  display: "flex",
                  gap: "20px",
                  height: "",
                },
                type: "2Col",
                content: [
                  {
                    content: [
                      {
                        content: {
                          src: "/sayan.png",
                          alt: "Project 1",
                        },
                        id: "4e5f6a7b-8c9d-4ebf-a2b3-56789abcdef012",
                        name: "Image",
                        styles: {
                          width: "100%",
                          marginBottom: "20px",
                          borderRadius: "8px",
                        },
                        type: "image",
                      },
                      {
                        content: {
                          innerText: "Project Title 1",
                        },
                        id: "5f6a7b8c-9dae-4fc0-a3b4-6789abcdef0123",
                        name: "Text",
                        styles: {
                          color: "#333",
                          fontSize: "24px",
                          fontWeight: "bold",
                          textAlign: "left",
                        },
                        type: "text",
                      },
                      {
                        content: {
                          innerText: "Brief description of the project and its key features.",
                        },
                        id: "6a7b8c9d-ae0b-4fd1-a4b5-789abcdef01234",
                        name: "Text",
                        styles: {
                          color: "#555",
                          textAlign: "left",
                        },
                        type: "text",
                      },
                      {
                        content: [
                          {
                            content: {
                              innerText: "Learn More",
                            },
                            id: "7b8c9dae-0bf2-4fe2-a5b6-89abcdef012345",
                            name: "Link",
                            styles: {
                              color: "#007bff",
                              textDecoration: "none",
                            },
                            type: "link",
                          },
                        ],
                        id: "8c9dae0b-f313-4ff3-a6b7-abcdef0123456",
                        name: "Container",
                        styles: {
                          textAlign: "left",
                        },
                        type: "container",
                      },
                    ],
                    id: "9dae0bf2-2424-4004-a7b8-bcdef01234567",
                    name: "Container",
                    styles: {
                      backgroundPosition: "center",
                      objectFit: "cover",
                      backgroundRepeat: "no-repeat",
                      textAlign: "left",
                      opacity: "100%",
                      width: "100%",
                      height: "100%",
                      marginTop: "",
                      paddingTop: "20px",
                      paddingLeft: "20px",
                      paddingBottom: "20px",
                      paddingRight: "20px",
                    },
                    type: "container",
                  },
                  {
                    content: [
                      {
                        content: {
                          src: "/sayan.png",
                          alt: "Project 2",
                        },
                        id: "ae0bf2f3-3535-4115-a8b9-cdef012345678",
                        name: "Image",
                        styles: {
                          width: "100%",
                          marginBottom: "20px",
                          borderRadius: "8px",
                        },
                        type: "image",
                      },
                      {
                        content: {
                          innerText: "Project Title 2",
                        },
                        id: "0bf2f3f4-4646-4226-a9ba-def0123456789",
                        name: "Text",
                        styles: {
                          color: "#333",
                          fontSize: "24px",
                          fontWeight: "bold",
                          textAlign: "left",
                        },
                        type: "text",
                      },
                      {
                        content: {
                          innerText: "Brief description of the project and its key features.",
                        },
                        id: "1f2f3f4f-5757-4337-aba0-ef0123456789a",
                        name: "Text",
                        styles: {
                          color: "#555",
                          textAlign: "left",
                        },
                        type: "text",
                      },
                      {
                        content: [
                          {
                            content: {
                              innerText: "Learn More",
                            },
                            id: "2f3f4f5f-6868-4448-acb1-f0123456789ab",
                            name: "Link",
                            styles: {
                              color: "#007bff",
                              textDecoration: "none",
                            },
                            type: "link",
                          },
                        ],
                        id: "3f4f5f6f-7979-4559-ada2-0123456789abc",
                        name: "Container",
                        styles: {
                          textAlign: "left",
                        },
                        type: "container",
                      },
                    ],
                    id: "4f5f6f7f-8a8a-466a-aeb3-123456789abcd",
                    name: "Container",
                    styles: {
                      backgroundPosition: "center",
                      objectFit: "cover",
                      backgroundRepeat: "no-repeat",
                      textAlign: "left",
                      opacity: "100%",
                      width: "100%",
                      height: "100%",
                      paddingTop: "20px",
                      paddingLeft: "20px",
                      paddingBottom: "20px",
                      paddingRight: "20px",
                    },
                    type: "container",
                  },
                ],
              },
            ],
          },
          {
            content: [
              {
                content: [
                  {
                    content: {
                      innerText: "© 2024 [Your Name]. All rights reserved.",
                    },
                    id: "567e8f9a-4b5c-4d6e-8f9a-0b1a2c3d4e5f",
                    name: "Text",
                    styles: {
                      textAlign: "center",
                      fontSize: "14px",
                      color: "#777",
                    },
                    type: "text",
                  },
                ],
                id: "678f9abc-5c6d-4e7f-9abc-1c2b3d4e5f6a",
                name: "Container",
                styles: {
                  padding: "20px",
                  maxWidth: "940px",
                  margin: "0 auto",
                },
                type: "container",
              },
            ],
            id: "789abcdf-6d7e-4f80-abcd-2d3c4e5f6a7b",
            name: "Section",
            styles: {
              backgroundPosition: "center",
              objectFit: "cover",
              backgroundRepeat: "no-repeat",
              textAlign: "left",
              opacity: "100%",
            },
            type: "section",
          },
        ],
      }),
    },
  ]);

  return (
    <div className=" p-4">
      <div className="border-b border-main-black pb-3">
        <h3 className="text-lg font-semibold mb-3">Template Generator</h3>
        <p className="text-sm text-muted-foreground mb-1">You can write prompt for generate template threough AI</p>
      </div>
      <div className="my-4">
        <Textarea
          className="mb-4 min-h-32 border-[#21db6554] border-2 outline-none rounded-lg"
          onChange={(e) => {
            setUserInput(e.target.value);
          }}
        />
        <Button
          disabled={userInput?.length == 0 || loading}
          size="sm"
          className="bg-[#22dd6626] hover:bg-[#22dd6626]  text-[#21DB66] w-full editor_text"
        >
          Generate Template with AI{" "}
          <Sparkles
            size={15}
            className="ml-2"
          />
        </Button>
      </div>
      <div>
        {components.map((item: Warframe) => {
          return (
            <div
              key={item.id}
              id={item.id}
              onDragStart={(e) => {
                e.dataTransfer.setData("componentType", item.warframe);
              }}
              draggable
              className="mb-2 rounded-md bg-zinc-800 text-xs p-2 px-3 h-20 flex items-center justify-center relative border-2 border-zinc-700 border-dashed"
            >
              <p>{item?.warframe_name}</p>
              <div className="absolute top-2 right-2 opacity-60 flex gap-1"></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AiTab;
