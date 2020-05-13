/* eslint-disable react/jsx-filename-extension */
import React, { FC } from 'react';

import './CV.scss';

const CV: FC = () => (
  <>
    <section className="cv__header">
      <div className="heading">
        <h1 className="heading--name">Howard Melnyczuk</h1>
      </div>
      <div className="subheading">
        <h2 className="subheading--vocation">Full-stack Developer</h2>
        <p className="subheading--age">British, b. 1989</p>
      </div>
      <article className="contact">
        <p className="contact--item contact--telephone">+44 7801 759 426</p>
        <p className="contact--item contact--email">h.melnyczuk@gmail.com</p>
        <p className="contact--item contact--website">melnycz.uk</p>
        <p className="contact--item contact--github">github.com/melnyczuk</p>
      </article>
    </section>
    <section className="cv__main">
      <div className="col col--left">
        <article className="tech col--left--item">
          <h2 className="tech--title sect--heading">Tech</h2>
          <ul className="tech--list">
            <li className="tech--key">
              JavaScript & TypeScript
              <ul>
                <li className="tech--item">React/Redux</li>
                <li className="tech--item">Node</li>
                <li className="tech--item">WebPack/Babel</li>
                <li className="tech--item">Jest, Enzyme & Mocha</li>
                <li className="tech--item">CucumberJS</li>
              </ul>
            </li>
            <li className="tech--key">
              Python
              <ul>
                <li className="tech--item">Django/Flask</li>
                <li className="tech--item">Celery</li>
                <li className="tech--item">OpenCV</li>
                <li className="tech--item">SpaCy & NLTK</li>
              </ul>
            </li>
            <li className="tech--key">
              Ruby
              <ul>
                <li className="tech--item">Rails</li>
                <li className="tech--item">Capybara</li>
                <li className="tech--item">Cucumber</li>
              </ul>
            </li>
            <li className="tech--key">
              CSS & SCSS
              <ul>
                <li className="tech--item">BEM & Mobile first</li>
              </ul>
            </li>
            <li className="tech--key">
              Scala
              <ul>
                <li className="tech--item">Spring</li>
                <li className="tech--item">Akka</li>
              </ul>
            </li>
            <li className="tech--key">
              C++
              <ul>
                <li className="tech--item">openFrameworks</li>
                <li className="tech--item">Shaders & GLSL</li>
              </ul>
            </li>
            <li className="tech--key">
              Linux & Bash
              <li className="tech--item">FFMPEG</li>
            </li>
            <li className="tech--key">
              DevOps
              <ul>
                <li className="tech--item">Git</li>
                <li className="tech--item">Docker</li>
                <li className="tech--item">AWS</li>
              </ul>
            </li>
            <li className="tech--key">
              SQL, Databases & Caching
              <ul>
                <li className="tech--item">Postgres, SQLite & MongoDB</li>
                <li className="tech--item">Redis & RabbitMQ</li>
              </ul>
            </li>
            <li className="tech--key">
              Best Practices
              <ul>
                <li className="tech--item">Functional Programming</li>
                <li className="tech--item">TDD & BDD</li>
                <li className="tech--item">Agile & Scrum</li>
                <li className="tech--item">Security & Threat modelling</li>
              </ul>
            </li>
          </ul>
        </article>
        <article className="skills" />
        <article className="education col--left--item">
          <h2 className="education--title sect--heading">Education</h2>
          <div className="education--uni" id="goldsmiths">
            <h3 className="education--course">MA Computational Arts</h3>
            <h4 className="education--institution">
              Goldsmiths College
              <br />
              University of London
            </h4>
            <h5 className="education--dates">Sept 2016 &mdash; Sept 2017</h5>
          </div>
          <div className="education--uni" id="leeds">
            <h3 className="education--course">BA Cinema & Photography</h3>
            <h4 className="education--institution">
              Institute for Communication Studies
              <br />
              University of Leeds
            </h4>
            <h5 className="education--dates">Sept 2009 &mdash; July 2012</h5>
          </div>
        </article>
      </div>
      <div className="col col--right">
        <div className="col col--right--sub col--right--l">
          <article className="experience">
            <h2 className="experience--title sect--heading">
              Relevant Experience
            </h2>
            <div className="pg--one">
              <div className="work" id="bbc">
                <h3 className="work--title">BBC</h3>
                <h4 className="work--role">Full-stack Developer</h4>
                <h6 className="work--dates">September 2018 &mdash; Present</h6>
                <h5 className="work--team" id="newslabs">
                  News Labs
                </h5>
                <p className="work--desc">
                  News Labs is a technology-agnostic, project driven innovation
                  incubator based across R&D and News departments, focusing on
                  cutting-edge projects addressing concerns facing modern
                  journalism. I have proven integral to several streams of work,
                  ranging from rapid prototyping of industrial tools & ideating
                  new distribution formats to cross-departmental research &
                  streamlining analytical tooling for user insights.
                  <br />
                  <br />
                  Due to the flexible format of the team, I have developed my
                  ability to work in a self-directed manner, managing my time
                  and balancing contributions to multiple projects
                  simultaneously, hitting hard deadlines and collaborating with
                  team members both in office & remotely. I also provide help &
                  guidance to junior & mid-weight developers regarding coding
                  best practices & technical optimisation.
                  <br />
                  <br />
                  I have organised ways-of-working sessions to push for improved
                  adherence to Agile methodologies, initiated development on a
                  package intended to ease inclusion of analytic triggers to
                  foster greater team-wide reliance on quantitative analysis
                  tools for user-facing technology & attended training on
                  security, threat modelling & test-driven design.
                  <br />
                  <br />
                  <ul>
                    <h4 className="work--resp--title">Key Responsibilities:</h4>
                    <li className="work--resp">Project ideation</li>
                    <li className="work--resp">Rapid prototyping</li>
                    <li className="work--resp">
                      User-driven design and testing
                    </li>
                    <li className="work--resp">
                      Architecting projects for AWS cloud infrastructure
                    </li>
                    <li className="work--resp">
                      Prototyped machine-learning & computer-vision approaches
                      to algorithmic image generation from plain-text input
                    </li>
                    <li className="work--resp">
                      Development of a new format for topic visualisation using
                      geographical mapping API&apos;s and a geolocation metadata
                      enrichment engine
                    </li>
                    <li className="work--resp">
                      Implementation of industry standard NLP models for
                      text-vectorisation projects such as a chatbot & a
                      text-clustering analytical tool
                    </li>
                    <li className="work--resp">
                      Identifying business orientated problems through research,
                      development & inter-departmental outreach
                    </li>
                    <li className="work--resp">
                      Production of technical documentation for internal
                      developers & open-source contributors, and non-technical
                      documentation for stakeholders
                    </li>
                  </ul>
                </p>
              </div>
              <div className="work" id="iplayer">
                <h5 className="work--team" id="iplayer">
                  iPlayer Web
                </h5>
                <p className="work--desc">
                  As part of a cross-discipline team working on the iPlayer
                  responsive website (with up to 21 million requests an hour), I
                  worked to constantly improve one of the UK&apos;s most used
                  services.
                  <br />
                  <br />
                  Given the volume of traffic, I worked with a strong focus on
                  improving performance across all browsers and operating
                  systems. Being a service with nationwide public broadcasting
                  responsibilities, I also made sure all features are 100%
                  accessible for every possible user in the UK.
                  <br />
                  <br />
                  The web team of iPlayer leads the way in determining future
                  developments across the BBC&apos;s digital TV & Radio services
                  through a focus on A/B testing and agile metric led
                  development. If successful, these experimental features are
                  then implemented by Mobile and Web-fit TV teams.
                  <br />
                  <br />
                  I also worked closely with UX designers to continuously
                  implement front-end improvements that are used and appreciated
                  nationwide.
                  <br />
                  <br />
                  <div className="pg--break" />
                  <ul>
                    <h4 className="work--resp--title">Key Responsibilities:</h4>
                    <li className="work--resp">
                      Maintain multiple microservices crucial to iPlayer using
                      TDD methodologies
                    </li>
                    <li className="work--resp">
                      Participate in migration from in-house onto AWS
                    </li>
                    <li className="work--resp">
                      Develop sophisticated A/B tests with insightful metrics
                    </li>
                    <li className="work--resp">
                      Work as part of an agile cross-discipline team using pair
                      programming
                    </li>
                    <li className="work--resp">
                      Push continuous deployments shipping new features
                    </li>
                    <li className="work--resp">
                      Update codebases from Javascript to Typescript
                    </li>
                    <li className="work--resp">
                      Update REST client to improve caching when interfacing
                      with vast BBC databases
                    </li>
                    <li className="work--resp">
                      Work with UX designers to implement new features
                    </li>
                    <li className="work--resp">
                      Contribute to team meetings and decision processes
                      regarding the technical future of iPlayer
                    </li>
                    <li className="work--resp">
                      Load testing and performance monitoring
                    </li>
                    <li className="work--resp">
                      Cross-browser and legacy support
                    </li>
                    <li className="work--resp">
                      Accessibility implementations
                    </li>
                  </ul>
                </p>
              </div>
              <div className="work" id="spirable">
                <h3 className="work--title">Spirable</h3>
                <h4 className="work--role">Full-stack Developer</h4>
                <h5 className="work--dates">Mar 2018 &mdash; Aug 2018</h5>
                <p className="work--desc">
                  Spirable is an adtech startup that provides a platform for
                  generating contextual, audience-specific content dynamically
                  and at scale.
                  <br />
                  <br />
                  Working as a Python developer on a Django stack with an
                  Angular frontend, I was tasked with building and maintaining
                  the video production functionality using technologies such as
                  OpenCV and FFMPEG. This involved working across phases
                  Research & Development, rapidly prototyping proof of concepts,
                  before integrating features into the existing product using
                  test-driven development. Responding to user feedback, I also
                  worked to improve the ease and usability of existing features
                  along with swiftly addressing bugfix tickets.
                  <br />
                  <br />
                  In addition to this, I provided support to the client services
                  and creative teams in producing client deliverables ahead of
                  strict industry deadlines. I also provided product
                  demonstrations during client meetings and pitches.
                  <br />
                  <br />
                  As a Facebook Marketing partner, I also attending the Facebook
                  Bootcamp at their Dublin HQ on behalf of Spirable.
                  <br />
                  <br />
                  <ul>
                    <h4 className="work--resp--title">Key Responsibilities:</h4>
                    <li className="work--resp">
                      Apply OpenCV and along with other video and audio
                      processing technologies to build new scalable features
                    </li>
                    <li className="work--resp">
                      Respond to the ongoing needs of clients in an agile manner
                      to meet strict deadlines
                    </li>
                    <li className="work--resp">
                      Maintain core product stack using TDD methodologies and
                      documentation
                    </li>
                    <li className="work--resp">
                      Work as part of an agile team
                    </li>
                    <li className="work--resp">
                      Deployment and inspection on AWS
                    </li>
                    <li className="work--resp">
                      Develop Bash scripts for internal automation
                    </li>
                    <li className="work--resp">
                      Support the Client Services and Creative teams in
                      generating content for pitches and deadlines
                    </li>
                    <li className="work--resp">
                      Deliver client training around the use of the product
                    </li>
                  </ul>
                </p>
              </div>
            </div>
          </article>
        </div>
        <div className="col col--right--sub col--right--r">
          <article className="personal">
            <h2 className="title sect--heading">Personal Projects</h2>
            <div className="work" id="objperma">
              <h3 className="work--title">Object Permanence</h3>
              <h5 className="work--dates">2018</h5>
              <p className="work--desc">
                Produced as part of the Digital Design Residency in partnership
                with the Victoria & Albert Museum and Goldsmiths College, Object
                Permanence is a digital investigation into colonial history and
                the legacies of institutional archives.
                <br />
                <br />
                By cross-referencing historical dates, names and places against
                key fields in the V&A&apos;s digital database, the project seeks
                to draw out physical items that have found their way into the
                museum&apos;s collection after being taken during 3 specific
                acts of British colonial aggression - the put down of the First
                Indian War for Independence in 1857, the sacking of the Summer
                Palace in China during 1860 and the Maqdala expedition into
                Ethiopia in 1868.
              </p>
            </div>
            <div className="work" id="rrosetta">
              <h3 className="work--title">Rrosetta</h3>
              <h5 className="work--dates">2017</h5>
              <p className="work--desc">
                Rrosetta crafts bespoke self-published zines using sensitive
                personal data.
                <br />
                <br />
                Rrosetta is a data-driven application that seeks to analyse
                sensitive personal information to create a unique and
                cherishable publication.
                <br />
                <br />
                Coming out of the niche and often intimate subculture of
                zine-making and self-publishing, Rrosetta also offers a way for
                me as an artist and publisher to critically explore wider
                cultural narratives arising out of the proliferation of the tech
                industry.
                <br />
                <br />
                This project set out to examine questions about the intersection
                between two distinct fields of concern: the strengths and
                shortcomings of autonomy, craft and agency present in
                technological approaches, and the price, cost and value of art
                and data under late capitalism.
              </p>
            </div>
          </article>
          <article>
            <h2 className="commission--title sect--heading">Commissions</h2>
            <div className="work" id="bomachat">
              <h3 className="work--title">BomaChat Chatbot</h3>
              <h5 className="work--dates">2018</h5>
              <p className="work--desc">
                Built an intelligent chatbot to discuss environmental issues
                with users in a robust and engaging manner.
                <br />
                <br />
                Implemented TensorFlow Sequence to Sequence model to produce
                intelligent, dynamic responses to user text input. The user
                interface was built using React for cross-platform deployment.
                <br />
                <br />
                Commissioned as part of Next Wave Festival in Australia during
                May 2018, and produced to a tight deadline.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
    <section className="cv__footer col col--right">
      <p>References Available on Request</p>
    </section>
  </>
);

export default CV;
