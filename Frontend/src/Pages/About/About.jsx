import React from "react";
import about from "../../asests/about.jfif";

const About = () => {
  return (
    <div className="container">
      <div className="col-7 mx-auto mt-4 text-center ">
        <h2 className="h2">Model Specifications</h2>
        <p className="p pt-2">
          This brain tumor detection model is built on a state-of-the-art neural
          network architecture, leverging deep learning techniques to analyze
          complex patterns within medical images. Below are some Training
          Design.
        </p>
      </div>

      <div className="col-12 d-flex align-items-center justify-content-between mt-5">
        <div className="boxClr col-2 text-center px-5 py-4 rounded">
          <span className="clr">Extensively</span> <br /> Trained
        </div>

        <div className="boxClr col-2 text-center px-5 py-4 rounded">
          <span className="clr">99% </span>Accuracy
        </div>
        <div className="boxClr col-2 text-center px-5 py-4 rounded">
          <span className="clr">High </span>Precision
        </div>
        <div className="boxClr col-2 text-center px-5 py-4 rounded">
          <span className="clr">BraTS20</span> Dataset
        </div>
      </div>

      <div className="col-12 mt-5 d-flex align-items-center justify-content-end">
        <div className="col-6">
          <img className="rounded-top" src={about} alt="about" height={500} />
        </div>

        <div className="col-6">
          <div className="aboutText">
            <span>Comprehensive</span>
            <h4>About This Project</h4>
            <p>
              Leverging OpenCV and PIL for image processing, TensorFlow and
              Keras for machine learning, and NumPy with Pathlib for seamless
              data manipulation, this system ensure efficient handling of
              medical images and datasets. The core architecture, based on
              Convolutional Neural Networks (CNNs), capture intricate patterns
              in medical images. Optimized using the Adam optimizer and
              monitored via TensorBoard, our system delivers precise, timely and
              potentially life-saving results for medical professionals and
              patients.
            </p>
          </div>

          <div className="aboutText mt-5">
            <h4>Technical Team</h4>
            <p>
              <a
                href="https://lablab.ai/event/langflow-hackathon/ai-the-era"
                target="_blank"
                rel="noopener noreferrer"
                className="clr"
              >
                <strong className="clr">"AI THE ERA" </strong>
              </a>
              is a dedicated team of six skilled professionals:
              <strong> Robin Tang</strong>, the Product Designer and Team
              Leader,
              <strong> Shumaila Batool</strong>, Machine Learning expert;
              <strong> Ichwan Sembodo</strong>, an Engineering Manager;
              <strong> Sikander Nawaz</strong>, a Full Stack Developer;
              <strong> Muhammad Farhan</strong>, responsible for API control;
              and <strong> Joe Garfield</strong>, a Generative AI Engineer.
              Their project leverages the advanced technologies, including
              JavaScript, Python. Using Machine Learning frameworks like
              TensorFlow and Keras, alongside image processing tools OpenCV and
              PIL, they create efficient solutions for medical imaging.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
