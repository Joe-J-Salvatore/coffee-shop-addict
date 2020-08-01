import React from "react"

const Contact = () => {
  return (
    <div>
      <section className="contact py-5 ">
        <h1 className="text-center font-weight-bold text-capitalize">
          contact us
        </h1>
        <div className="row">
          <div className="col-10 col-sm-8 col-md-6 mx-auto">
            <form
              action={`https://formspree.io/${process.env.GATSBY_FORMSPREE_ID}`}
              method="POST"
            >
              <div className="form-group">
                <label htmlFor="name">
                  Name:
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    id="name"
                    placeholder="your name"
                  />
                </label>
              </div>
              <div className="form-group">
                <label htmlFor="email">
                  Email:
                  <input
                    type="email"
                    className="form-control"
                    name="_replyto"
                    id="email"
                    placeholder="your@email.com"
                  />
                </label>
              </div>
              <div className="form-group">
                <label htmlFor="thoughts">
                  What's on your mind?
                  <textarea
                    name="thoughts"
                    id="thoughts"
                    cols="30"
                    className="form-control"
                    rows="5"
                    placeholder="Complement or complain, we'll listen"
                  ></textarea>
                </label>
              </div>
              <button
                type="submit"
                className="btn btn-yellow btn-block text-capitalize mt-5"
                value="submit"
              >
                submit
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
