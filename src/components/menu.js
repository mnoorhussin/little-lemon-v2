import salad from "./greek-salad.jpg";
import bruschetta from "./restauranfood.jpg";
import dessert from "./lemon-dessert.jpg";
import React from "react";


const Specials = () => {

  return (
    <section id="menu" class="bg-light py-5">
      <div class="container">
        
        <div class="row row-cols-1 row-cols-md-3 g-4">
          <div class="col">
            <div class="card h-100">
              <img src={salad} alt="salad"></img>
                <div class="card-body">
                  <h5 class="card-title">Greek Salad</h5>
                  <p class="card-text">Classic Greek Salad, featuring tomatoes, cucumbers, red onions, olives, feta cheese, and dressed with a red wine vinaigrette.</p>
                  <h6 class="card-subtitle mb-2">$8.99</h6>
                  <button class="btn btn-warning ">Order</button>
                </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <img src={bruschetta} alt="Bruschetta"></img>
                <div class="card-body">
                  <h5 class="card-title">Bruschetta</h5>
                  <p class="card-text">Crispy toasted bread topped with tomatoes, fresh basil, and mozzarella cheese, drizzled with a balsamic glaze.</p>
                  <h6 class="card-subtitle mb-2">$9.99</h6>
                  <button class="btn btn-warning ">Order</button>
                </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <img src={dessert} class="card-img-top" alt="Lemon Dessert"></img>
                <div class="card-body">
                  <h5 class="card-title">Lemon Dessert</h5>
                  <p class="card-text">Moist and tangy lemon cake, topped with a zesty lemon frosting for a burst of flavor in every bite.</p>
                  <h6 class="card-subtitle mb-2">$6.99</h6>
                  <button class="btn btn-warning ">Order</button>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
};
export default Specials;