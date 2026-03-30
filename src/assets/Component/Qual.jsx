export default function Table(){
    return(
         <>
         <table>
          <tr>
            <td>QUALIFICATION</td>
            <th>SI.No.</th>
            <th>Examination</th>
            <th>Board</th>
            <th>Percentage</th>
            <th>Year of Passing</th>
          </tr>
          <tr>
            <td></td>
            <td>1</td>
            <td>Class X</td>
            <td><input type="text" /></td>
            <td><input type="text" /></td>
            <td><input type="text" /></td>
          </tr>
          <tr>
            <td></td>
            <td>2</td>
            <td>Class XII</td>
            <td><input type="text" /></td>
            <td><input type="text" /></td>
            <td><input type="text" /></td>
          </tr>
          <tr>
            <td></td>
            <td>3</td>
            <td>Graduation</td>
            <td><input type="text" /></td>
            <td><input type="text" /></td>
            <td><input type="text" /></td>
          </tr>
          <tr>
            <td></td>
            <td>4</td>
            <td>Masters</td>
            <td><input type="text" /></td>
            <td><input type="text" /></td>
            <td><input type="text" /></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>(10 char max)</td>
            <td>(upto 2 decimal)</td>
            <td></td>
          </tr>
        </table>
        <table>
          <tr>
            <td>COURSES</td>
          </tr>
          <tr>
            <td>APPLIED FOR</td>
            <td>BCA<input type="radio" /></td>
            <td>B.Com<input type="radio" /></td>
            <td>B.Sc <input type="radio" /></td>
            <td>B.A <input type="radio" /></td>
          </tr>
          
        </table>
        </>
    )
}
       