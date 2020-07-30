import React from "react"
import { Link } from "gatsby"

const Info = props => {
  return (
    <div className="my-5">
      <section>
        <div className="container">
          <div className="row">
            <div className="col-10 col-sm-8 mx-auto  text-center">
              <h3 className="display-4 text-center text-uppercase pb-2 font-weight-bold">
                {props.title}
              </h3>
              <p className="lead  text-muted  mb-5">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe
                accusamus consequuntur omnis consequatur officiis iste eos, cum
                totam sunt corporis id sapiente nulla minima quasi veniam
                voluptate laboriosam, quidem cumque odio exercitationem
                assumenda fugiat in expedita. Perferendis expedita aspernatur,
                facere, dolor accusantium obcaecati animi fuga quaerat impedit
                aperiam eos earum
              </p>
              <Link to="/about">
                <button className="btn text-uppercase btn-yellow">
                  About page
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Info
