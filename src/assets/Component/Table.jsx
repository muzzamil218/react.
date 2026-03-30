export default function Table(){
    return(
        <>
         <table>
        <tr>
          <td>FIRST NAME</td>
          <td><input type="text" /> (max 30 characters a-z and A-Z)</td>
        </tr>
        <tr>
          <td>LAST NAME</td>
          <td><input type="text" /> (max 30 characters a-z and A-Z)</td>
        </tr>
        <tr>
          <td>DATE OF BIRTH</td>
          <td>
            <select>
              <option>DAY:</option>
              <option>1</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
            </select>
            <select>
              <option>MONTH:</option>
              <option>1</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>8</option>
              <option>9</option>
              <option>10</option>
              <option>11</option>
              <option>12</option>
            </select>
            <select>
              <option>YEAR</option>
              <option>2020</option>
              <option>2021</option>
              <option>2022</option>
              <option>2023</option>
              <option>2024</option>
              <option>2025</option>
              <option>2026</option>
            </select>
          </td>
        </tr>
        <tr>
          <td>EMAIL ID</td>
          <td><input type="text" /></td>
        </tr>
        <tr>
          <td>MOBILE NUMBER</td>
          <td><input type="text" /> (10 digit number)</td>
        </tr>
        <tr>
          <td>GENDER</td>
          <td>
            <label>Male</label>
            <input type="radio" name="gender" />
            <label>Female</label>
            <input type="radio" name="gender" />
          </td>
        </tr>
        <tr>
          <td>ADDRESS</td>
          <td>
            <textarea cols="40" rows="5"></textarea>
          </td>
        </tr>
        <tr>
          <td>CITY</td>
          <td><input type="text" /> (max 30 characters a-z and A-Z)</td>
        </tr>
        <tr>
          <td>PIN CODE</td>
          <td><input type="password" /> (6 digit number)</td>
        </tr>
        <tr>
          <td>STATE</td>
          <td><input type="text" /> (max 30 characters a-z and A-Z)</td>
        </tr>
        <tr>
          <td>COUNTRY</td>
          <td><input type="text" /></td>
        </tr>
        <tr>
          <td>HOBBIES</td>
          <td>
            <label>Drawing</label>
            <input type="checkbox" />
            <label>Singing</label>
            <input type="checkbox" />
            <label>Dancing</label>
            <input type="checkbox" />
            <label>Sketching</label>
            <input type="checkbox" />
          </td>
        </tr>
        <tr>
          <td></td>
          <td>
            <label>Others</label>
            <input type="checkbox" />
            <input type="text" />
          </td>
        </tr>
        </table>
        </>
    )
}