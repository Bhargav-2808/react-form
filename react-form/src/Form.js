import { Card, Container } from "react-bootstrap";
import { useForm} from 'react-hook-form'
const Form = () => {

    const {register, handleSubmit} = useForm({

    });
    const onSubmit = (data) =>{
        console.log(data);
    }
  return (
    <>
    <Container>
      <Card>
        <Card.Body>
          {" "}
          <form action="" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label htmlFor="fullname">Full Name</label>
              <input
                type="text"
                className="form-control"
                id="fullname"
                placeholder="Enter Your Full Name"
                name= "fullname"
                {...register('fullname', { required: true })}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">E-mail Address</label>
              <input
                type="text"
                className="form-control"
                id="email"
                placeholder="Enter Your E-mail Address"
                name= "email"
                {...register('email', { required: true })}
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="text"
                className="form-control"
                id="phone"
                placeholder="Enter Your Phone Number"
                name= "phone"
                {...register('phone', { required: true })}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="text"
                className="form-control"
                id="password"
                placeholder="Enter Your Password"
                name= "password"
                {...register('password', { required: true })}
              />
            </div>
            <div className="form-group">
              <label htmlFor="state">Choose Your State</label>
              <select className="form-control" id="state" 
              name= "city"
              {...register('city', { required: true })}>
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
                 
                {...register('gender', { required: true })}
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
                  
                {...register('gender', { required: true })}
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
                  
                  {...register('gender', { required: true })}
                />
                <label className="form-check-label" htmlFor="other">
                  other
                </label>
              </div>
            </div>
            <div className="form-group">
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="checkbox" id="tnc" 
                name= "checkedbox"
                {...register('checkedbox', { required: true })}/>
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
