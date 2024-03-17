import React from 'react'
import "./Counter.css"

export function Counter() {
  return (
    <>
    <h2>Air campus</h2>
    <h3>react testing class</h3>
    <p title='vasanth'>good night, thank you</p>
    <img src="" alt="picture" />
    <div data-testid="custom"></div>
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder='firstName' value={"vasanth"} />
        </div>
        <div>
          <label htmlFor="age">age</label>
          <textarea id="age"></textarea>
        </div>
        <div>
          <label htmlFor="location">Location</label>
          <select id="location">
            <option value="us">US</option>
            <option value="uk">UK</option>
            <option value="ind">India</option>
            <option value="rsa">Russia</option>
          </select>
        </div>
        <div>
          <label>
            <input type="checkbox" id="terms" />I agree to above terms
          </label>
        </div>
        <button>Submit</button>
      </form>
    </>
  );
}