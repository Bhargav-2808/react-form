import { Card, Container } from "react-bootstrap";
const Form = () => {
  return (
    <>
    <Container>
      <Card>
        <Card.Body>
          {" "}
          <form action="">
            <div className="form-group">
              <label htmlFor="fullname">Full Name</label>
              <input
                type="text"
                className="form-control"
                id="fullname"
                placeholder="Enter Your Full Name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">E-mail Address</label>
              <input
                type="text"
                className="form-control"
                id="email"
                placeholder="Enter Your E-mail Address"
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="text"
                className="form-control"
                id="phone"
                placeholder="Enter Your Phone Number"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="text"
                className="form-control"
                id="password"
                placeholder="Enter Your Password"
              />
            </div>
            <div className="form-group">
              <label htmlFor="state">Choose Your State</label>
              <select className="form-control" id="state">
                <option value="">--- Select Your State ---</option>
                <option value="Jharkhand">Jharkhand</option>
                <option value="Assam">Assam</option>
                <option value="Meghalaya">Meghalaya</option>
                <option value="Punjab">Punjab</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="gender" className="mr-4">
                Choose Your Gender
              </label>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  id="male"
                  value="male"
                  name="gender"
                />
                <label className="form-check-label" htmlFor="male">
                  male
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  id="female"
                  value="female"
                  name="gender"
                />
                <label className="form-check-label" htmlFor="female">
                  female
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  id="other"
                  value="other"
                  name="gender"
                />
                <label className="form-check-label" htmlFor="other">
                  other
                </label>
              </div>
            </div>
            <div className="form-group">
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="checkbox" id="tnc" />
                <label className="form-check-label" htmlFor="tnc">
                  I agree all terms & conditions
                </label>
              </div>
            </div>
            <button className="btn btn-primary">Create New Account</button>
          </form>
        </Card.Body>
      </Card>
      </Container>
    </>
  );
};
export default Form;
