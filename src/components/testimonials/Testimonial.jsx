import './testimonials.scss'
import {Person, PersonAddDisabledSharp} from "@material-ui/icons"

export default function Testimonial() {
    
    return (
        <div className="testimonials" id="testimonials">
            <h1>Testimonials</h1>
                <div className="container">
                    <div className="card">
                    <Person style={{fontSize: 150}} />
                            <h2>
                                User's name
                            </h2>
                            <h2>
                                Occupation
                            </h2>
                            <h3>
                                Review
                            </h3>
                        </div>
                    </div>
                </div>
    )
}
