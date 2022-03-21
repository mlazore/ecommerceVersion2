import React from 'react'

function Contact() {
    return(
        <section>
        <img id="workout" img src="https://i.imgur.com/sLgie4I.jpeg" alt="photo"/>


        <div className="showcasetext2">
        <div className="contact">
         <div className="form">
            <form>
                <table>
                    <tr>
                        <td>Full name: <input type="text" placeholder="John Doe"/>
                        </td>
                    </tr>
                </table>
                <table>
                    <tr>
                        <td>Email: <input type="text" placeholder="email"/> </td>
                    </tr>
                </table>
                    <table>
                        <tr>
                            <td>Phone # <input type="text" placeholder="Phone Number"/> </td>
                        </tr>
                     </table>
                     <table>
                        <tr>
                            <td>
                            <textarea name="message" placeholder="Leave a Comment" rows="20" cols="50"
                            required></textarea>
                            </td>
                        </tr>
                    </table>
            </form>
        </div>
         </div>
         </div>
         
        </section>

    )
}

export default Contact;