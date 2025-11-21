import React, { useState, useRef, useEffect } from "react";
import HTMLFlipBook from "react-pageflip";
import heImg from "./images/he.png";
import ISRUImg from "./images/ISRU.png";
import ESAImg from "./images/ESA.png";
import THalesImg from "./images/Thales.jpg";
import ITUImg from "./images/ITU.jpg";
import SeanIMG from "./images/sean.webp";
import Photo1 from "./images/photo1.webp";
import Photo2 from "./images/photo2.webp";
import Photo3 from "./images/photo3.webp";
import Change6 from "./images/Change6.jpg";
import Interlune from "./images/Interlune.webp";
import Bluefors from "./images/Bluefors.webp";
import Nuclear from "./images/Nuclear.jpg";
import NuclearEnergy from "./images/NuclearEnergy.jpg";
import moon from "./images/moon.jpg";

import HoverText from "./HoverText.jsx";

function Book() {
  const [page, setPage] = useState(0);
  const [sourceModal, setSourceModal] = useState(false);

  const flipBookRef = useRef(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const nextButtonClick = () => {
    flipBookRef.current.pageFlip().flipNext();
  };
  const prevButtonClick = () => {
    flipBookRef.current.pageFlip().flipPrev();
  };
  const onFlip = (data) => {
    setPage(data);
  };

  const sourceClick = () => {
    setSourceModal(!sourceModal);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [stickyNotes, setStickyNotes] = useState({});
  const [newNote, setNewNote] = useState("");
  const [noteModalOpen, setNoteModalOpen] = useState(false);
  const [selectedPage, setSelectedPage] = useState(null);

  const addStickyNote = () => {
    if (!newNote.trim()) return;

    setStickyNotes((prev) => ({
      ...prev,
      [selectedPage]: [...(prev[selectedPage] || []), newNote],
    }));

    setNewNote("");
    setNoteModalOpen(false);
  };

  return (
    <>
      <div className="sticky-container">
        <div className="book-large-container">
          {page !== 0 && windowWidth > 440 ? (
            <button className="next-button" onClick={prevButtonClick}>
              &lt;
            </button>
          ) : (
            <div className="fake-button"></div>
          )}
          <div className="book-container">
            <HTMLFlipBook
              width={320}
              height={500}
              showCover={true}
              size="fixed"
              onFlip={(e) => onFlip(e.data)}
              ref={flipBookRef}
            >
              <div className="page" style={{ background: "transparent" }}>
                <div className="page-content cover">The New Moon Race</div>
              </div>

              <div className="page">
                <div className="page-content">
                  <div className="description-container">
                    <img
                      className="image-pages"
                      src={Photo1}
                      alt="solar_panels_on_the_moon"
                    />
                    <p>
                      A new global race to the moon is underway, driven not by
                      the desire to plant flags but to extract valuable
                      resources like water and{" "}
                      <HoverText
                        text={"helium-3"}
                        image={heImg}
                        imageAlt={"helium-3-image"}
                        definition={
                          "A stable isotope of helium with one neutron"
                        }
                      />
                      . These materials have both economic and strategic
                      importance, particularly helium-3, which could power{" "}
                      <HoverText
                        text={"nuclear reactors"}
                        image={Nuclear}
                        imageAlt={"nuclear_reactor"}
                        definition={
                          "A device used to sustain a controlled fission nuclear chain reaction"
                        }
                      />{" "}
                      on the moon and cool quantum computers on Earth.
                    </p>
                    <button
                      className="sticky-note-button"
                      onClick={() => {
                        setSelectedPage(1);
                        setNoteModalOpen(true);
                      }}
                    >
                      + Sticky Note
                    </button>
                  </div>
                </div>
              </div>

              <div className="page">
                <div className="page-content">
                  <div className="description-container">
                    <p>
                      Private companies are now major players in this new space
                      economy, marking a shift from government-led exploration
                      to commercial competition. Recent deals, such as{" "}
                      <HoverText
                        text={"Bluefors"}
                        image={Bluefors}
                        imageAlt={"Bluefors"}
                        definition={
                          "Helsinki-based company specializing in cryogenic products used in several high-tech industries"
                        }
                      />{" "}
                      purchasing lunar helium-3 from{" "}
                      <HoverText
                        text={"Interlune"}
                        image={Interlune}
                        imageAlt={"Interlune"}
                        definition={
                          "The first company to commercialize resources in space"
                        }
                      />{" "}
                      for $300 million, show the growing commercial viability of
                      lunar mining. Blue Origin’s Project Oasis further
                      emphasizes this shift by mapping lunar resources to
                      identify potential mining sites.
                    </p>
                    <button
                      className="sticky-note-button"
                      onClick={() => {
                        setSelectedPage(2);
                        setNoteModalOpen(true);
                      }}
                    >
                      + Sticky Note
                    </button>
                  </div>
                </div>
              </div>

              <div className="page">
                <div className="page-content">
                  <div className="description-container">
                    <img
                      className="image-pages"
                      src={Photo2}
                      alt="astronaut_on_the_moon"
                    />
                    <p>
                      Companies and nations alike recognize that whoever masters{" "}
                      <HoverText
                        text={"in-situ resource utilization (ISRU)"}
                        image={ISRUImg}
                        imageAlt={"ISRU-image"}
                        definition={
                          "The practice of turning lunar materials like water ice into usable fuel"
                        }
                      />{" "}
                      will dominate future space logistics and economies.
                    </p>
                    <button
                      className="sticky-note-button"
                      onClick={() => {
                        setSelectedPage(3);
                        setNoteModalOpen(true);
                      }}
                    >
                      + Sticky Note
                    </button>
                  </div>
                </div>
              </div>

              <div className="page">
                <div className="page-content">
                  <div className="description-container">
                    <p>
                      Infrastructure development is becoming central to this
                      competition. Projects such as{" "}
                      <HoverText
                        text={"ESA’s Moonlight communications network"}
                        image={ESAImg}
                        imageAlt={"ESA-Logo"}
                        definition={
                          "A Project by ESA with the goal of creating uninterrupted telecommunications satellite coverage between Earth and the Moon"
                        }
                      />{" "}
                      and{" "}
                      <HoverText
                        text={"Thales Alenia Space’s lunar outpost"}
                        image={THalesImg}
                        imageAlt={"Thales-lunar-outpost"}
                        definition={
                          "A Contract with the Italian Space Agency (ASI) to develop the first human outpost on the lunar surface"
                        }
                      />{" "}
                      are essential for establishing a long-term presence on the
                      moon. The commercialization trend is reinforced by
                      legislation allowing private ownership of extracted space
                      resources, an approach now mirrored by several other
                      nations, further blurring the line between exploration and
                      exploitation.
                    </p>
                    <button
                      className="sticky-note-button"
                      onClick={() => {
                        setSelectedPage(4);
                        setNoteModalOpen(true);
                      }}
                    >
                      + Sticky Note
                    </button>
                  </div>
                </div>
              </div>

              <div className="page">
                <div className="page-content">
                  <div className="description-container">
                    <p>
                      The economic potential of lunar operations is immense,
                      with half of the 450 planned missions for 2033 being
                      commercial, projected to generate $151 billion in revenue.
                      Competition is also extending into the realm of
                      communication, as companies rush to claim lunar radio
                      spectrum ahead of the{" "}
                      <HoverText
                        text={"2027 World Radio Communication Conference"}
                        image={ITUImg}
                        imageAlt={"World-Radio-Communication-Conference"}
                        definition={
                          "A Conference organized by the ITU to review and revise the Radio Regulations"
                        }
                      />
                      . The event will likely shape the rules for resource
                      extraction and spectrum usage, making it a key arena for
                      technological and political influence.
                    </p>
                    <button
                      className="sticky-note-button"
                      onClick={() => {
                        setSelectedPage(5);
                        setNoteModalOpen(true);
                      }}
                    >
                      + Sticky Note
                    </button>
                  </div>
                </div>
              </div>

              <div className="page">
                <div className="page-content">
                  <div className="description-container">
                    <p>
                      Amid these developments, lunar exploration is transforming
                      into a geopolitical contest. U.S. leaders, including
                      acting NASA administrator{" "}
                      <HoverText
                        text={"Sean Duffy"}
                        image={SeanIMG}
                        imageAlt={"Sean-Duffy-profile"}
                        definition={
                          "An American politician and attorney, serving as the 20th U.S. secretary of transportation since January 2025"
                        }
                      />
                      , have framed the Artemis program as a race against China
                      for dominance at the moon’s south pole, an area rich in
                      water and helium-3. This rhetoric signals that the moon is
                      now viewed as a strategic frontier for sustained
                      habitation and power projection rather than scientific
                      discovery alone.
                    </p>
                    <button
                      className="sticky-note-button"
                      onClick={() => {
                        setSelectedPage(6);
                        setNoteModalOpen(true);
                      }}
                    >
                      + Sticky Note
                    </button>
                  </div>
                </div>
              </div>

              <div className="page">
                <div className="page-content">
                  <div className="description-container">
                    <img
                      className="image-pages"
                      src={Photo3}
                      alt="possible_new_tech_on_the_moon"
                    />
                    <p>
                      Power generation is another decisive factor, with multiple
                      nations developing nuclear reactors to support lunar
                      infrastructure.
                    </p>
                    <button
                      className="sticky-note-button"
                      onClick={() => {
                        setSelectedPage(7);
                        setNoteModalOpen(true);
                      }}
                    >
                      + Sticky Note
                    </button>
                  </div>
                </div>
              </div>

              <div className="page">
                <div className="page-content">
                  <div className="description-container">
                    <p>
                      Since solar power cannot operate during the moon’s
                      two-week-long night,{" "}
                      <HoverText
                        text={"nuclear energy"}
                        image={NuclearEnergy}
                        imageAlt={"nuclear_energy"}
                        definition={
                          "When electricity is made from atoms splitting apart"
                        }
                      />{" "}
                      offers the only viable means of continuous operation.
                      However, deploying reactors may create de facto “keep out
                      zones,” challenging existing space law and potentially
                      granting the first movers control over local resources.
                      China’s lunar strategy exemplifies this blend of technical
                      capability and geopolitical ambition.
                    </p>
                    <button
                      className="sticky-note-button"
                      onClick={() => {
                        setSelectedPage(8);
                        setNoteModalOpen(true);
                      }}
                    >
                      + Sticky Note
                    </button>
                  </div>
                </div>
              </div>

              <div className="page">
                <div className="page-content">
                  <div className="description-container">
                    <p>
                      Following successful missions like{" "}
                      <HoverText
                        text={"Chang’e 6"}
                        image={Change6}
                        imageAlt={"Chang’e_6"}
                        definition={
                          "The sixth robotic lunar exploration mission by the China National Space Administration"
                        }
                      />{" "}
                      China continues advancing its lunar infrastructure and
                      rallying international partners. Ultimately, the moon race
                      is no longer just about engineering achievements but also
                      about political leadership and diplomatic influence, as
                      whoever leads in space, as Sean Duffy declared, “will lead
                      on Earth."
                    </p>
                    <button
                      className="sticky-note-button"
                      onClick={() => {
                        setSelectedPage(9);
                        setNoteModalOpen(true);
                      }}
                    >
                      + Sticky Note
                    </button>
                  </div>
                </div>
              </div>
              <div className="page">
                <div className="page-content">
                  <div className="description-container">
                    <div className="bigger-modal-container">
                      <button
                        className="sticky-note-button"
                        onClick={sourceClick}
                      >
                        Sources
                      </button>

                      <img className="moon-img" src={moon} />

                      {sourceModal && (
                        <div className="modal-container">
                          <div className="modal-title">
                            <h4 className="modal-text">Sources</h4>
                            <button className="x-button" onClick={sourceClick}>
                              X
                            </button>
                          </div>
                          <div className="modal-description">
                            <a
                              className="link"
                              href="https://spacenews.com/resources-reactors-and-rivalries-will-decide-the-new-moon-race/"
                              target="_blank"
                            >
                              Space News Article
                            </a>
                            <a
                              className="link"
                              href="https://en.wikipedia.org/wiki/Helium-3"
                              target="_blank"
                            >
                              Helium-3 Wiki
                            </a>
                            <a
                              className="link"
                              href="https://en.wikipedia.org/wiki/Sean_Duffy"
                              target="_blank"
                            >
                              Sean Duffy Wiki
                            </a>
                            <a
                              className="link"
                              href="https://en.wikipedia.org/wiki/In_situ_resource_utilization"
                              target="_blank"
                            >
                              ISRU Wiki
                            </a>
                            <a
                              className="link"
                              href="https://en.wikipedia.org/wiki/Moonlight_Initiative"
                              target="_blank"
                            >
                              ESA Wiki
                            </a>
                            <a
                              className="link"
                              href="https://www.thalesaleniaspace.com/en/press-releases/thales-alenia-space-signs-contract-italian-space-agency-asi-develop-first-human"
                              target="_blank"
                            >
                              Thales Alenia Space
                            </a>
                            <a
                              className="link"
                              href="https://en.wikipedia.org/wiki/World_Radiocommunication_Conference"
                              target="_blank"
                            >
                              World Radio Communication Conference Wiki
                            </a>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="page" style={{ background: "transparent" }}>
                <div className="page-content cover">Thank You!</div>
              </div>
            </HTMLFlipBook>
          </div>

          {page !== 11 && windowWidth > 440 ? (
            <button className="next-button" onClick={nextButtonClick}>
              &gt;
            </button>
          ) : (
            <div className="fake-button"></div>
          )}
        </div>

        <div className="sticky-notes-display">
          {(stickyNotes[page] || []).map((note, i) => (
            <div key={i} className="sticky-note">
              {note}
            </div>
          ))}

          {windowWidth > 760 &&
            page !== 0 &&
            (stickyNotes[page + 1] || []).map((note, i) => (
              <div key={i} className="sticky-note">
                {note}
              </div>
            ))}
        </div>
      </div>

      {noteModalOpen && (
        <div className="sticky-modal">
          <div className="sticky-modal-content">
            <h4>Add Sticky Note</h4>
            <textarea
              value={newNote}
              onChange={(e) => setNewNote(e.target.value)}
              placeholder="Write your note..."
            />

            <div className="sticky-modal-buttons">
              <button
                className="sticky-note-button"
                onClick={() => setNoteModalOpen(false)}
              >
                Cancel
              </button>
              <button className="sticky-note-button" onClick={addStickyNote}>
                Add
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Book;
