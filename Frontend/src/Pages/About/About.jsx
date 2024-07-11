import React from "react";

const About = () => {
  return (
    <div className="container">
      <div>
        <h2>Model Specifications</h2>
        <p>
          This brain tumor detection model is built on a state-of-the-art neural
          network architecture, leverging deep learning techniques to analyze
          complex patterns within medical images. Below are some Training
          Design.
        </p>
      </div>

      <div>
        <div>10 Epochs</div>
        <div>96% Accuracy</div>
        <div>High Precision</div>
        <div>Br35H Dataset</div>
      </div>

      <div>
        <div>Picture Section</div>

        <div>
          <p>Comprehensive</p>
          <div>
            <h4>Technical Staff</h4>
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

          <div>
            <h4>About This Project</h4>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex
              excepturi officia provident sunt consequuntur aliquam laudantium
              amet modi eligendi architecto consequatur vel hic, a reprehenderit
              exercitationem! Omnis nemo adipisci rem. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Fugit nemo provident iusto
              perspiciatis blanditiis architecto ipsam soluta nulla ex
              cupiditate in est, magni corrupti, tempore voluptas autem rem aut.
              Autem.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
