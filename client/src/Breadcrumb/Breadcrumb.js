import React from "react";
import "./Breadcrumb.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const Breadcrumb = (props) => {
  return (
    <div className="Breadcrumb">
      {props.categories.map((category) => {
        return (
          <span className="breadcrumbItem" key={category.id}>
            <a className="breadcrumbLink" href="/">
              {category.name}
            </a>
            <FontAwesomeIcon className="breadcrumbIcon" icon={faChevronRight} />
          </span>
        );
      })}
    </div>
  );
};

export default Breadcrumb;
