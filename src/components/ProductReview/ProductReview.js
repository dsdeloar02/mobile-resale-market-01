import React from 'react';
import './ProductReview.css'

const ProductReview = () => {
    return (
        <div>
            <h1 className='text-4xl font-bold text-center my-9'>Product Review </h1>
            <div class="quote-container shadow-md border">

                <div class="star-rating">★★★★★</div>

                <p class="quote">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent varius condimentum orci consectetur suscipit dolor sit amet."</p>

                <div class="reviewer-photo">
                    <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=140&h=140&q=80" width="140" height="140" alt="Photo of reviewer"/>
                </div>

                <div class="reviewer-details">
                    <span class="name">Sally S.</span>
                    <span class="title">Site Reliability Engineer at <strong>Google</strong></span>
                </div>

                <div class="bottom">
                    <svg width="100%" height="80">
                        <rect width="100%" height="80" class="shape-fill" />
                    </svg>
                    <svg class="curves" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 200" preserveAspectRatio="none">
                        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".35" class="shape-fill"></path>
                        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
                    </svg>
                </div>

            </div>
        </div>
    );
}

export default ProductReview;
