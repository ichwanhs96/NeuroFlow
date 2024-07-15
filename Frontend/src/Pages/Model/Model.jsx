import React from "react";

const Model = () => {
  return (
    <div className="container pt-5">
      <p className="text-center">Add MRI Scan Below</p>
      <div class="input-group mt-3">
        <input
          type="file"
          class="form-control"
          id="inputGroupFile04"
          aria-describedby="inputGroupFileAddon04"
          aria-label="Upload"
        />
      </div>

      <div className="mt-5 pb-4">
        <h4 className="text-center">Result </h4>
        <p className="border">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur
          dolores, optio voluptas delectus distinctio sit consectetur. Autem,
          temporibus pariatur. Sapiente quasi cum animi. Sed, provident
          laboriosam! Architecto debitis blanditiis odio fugiat. Consectetur
          minima accusamus vitae porro amet veniam, ipsum magnam quod
          temporibus. Placeat officiis hic eveniet incidunt ipsam ipsa quisquam
          eaque. Tempore natus vel perferendis molestias quos cupiditate beatae
          architecto blanditiis similique ipsum eligendi voluptate soluta
          laboriosam cumque voluptatibus amet, itaque recusandae quaerat
          corrupti consequatur eos magni temporibus nisi. Delectus accusamus
          voluptatum assumenda vitae sint nulla, similique numquam aut placeat
          fuga animi ab provident sequi minus harum non quibusdam mollitia!
        </p>

        <div className="text-end ">
          <button type="button" className="button p-2 rounded">
            Download PDF
          </button>
        </div>
      </div>
    </div>
  );
};

export default Model;
