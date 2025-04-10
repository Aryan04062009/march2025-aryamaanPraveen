import { title } from "@/components/primitives";

export default function RecipePage() {
  return (
    <div>
      <h1 className={title()}>Recipes</h1>

      <div className="flex flex-wrap border-dotted border-4 justify-center">
        <p className="p-5 m-5 border-solid border-1">Child #1</p>
        <p className="p-5 m-5 border-solid border-1">Child #2</p>
        <p className="p-5 m-5 border-solid border-1">Child #3</p>
      </div>

      <h2 className="text-center text-4xl">Brownie</h2>

      <div className="flex flex-wrap justify-center border-solid border-5">
        <p className="p-5 m-5 border-dotted border-3">
          First, gather 2 eggs, water, powdered sugar, unsweetened coca powder,
          oil, and vanila extract. Mix the dry and wet ingredients separately.
          Then mix the two together. Pour the batter onto a baking pan. Bake at
          325 degrees for 45 minutes.
        </p>
        <a className="p-5 m-2 border-dotted border-3" href="Brownie Source">
          https://www.loveandlemons.com/brownies-recipe/
        </a>
        <img
          alt="Homemade Brownie"
          src="https://cdn.loveandlemons.com/wp-content/uploads/2020/01/brownie-recipe.jpg"
        />
      </div>

      <br />
      <></>

      <h2 className="text-center text-4xl">Scrambled Eggs</h2>
      <div className="flex flex-wrap justify-center border-solid border-5">
        <p className="p-5 m-2 border-dotted border-3">
          First, gather eggs, milk, butter, salt, and pepper. Beat the eggs, and
          add the milk. Then preheat and butter the pan before pouring the eggs
          in. Cook and add pepper.
        </p>
        <a
          className="p-5 m-2 border-dotted border-3"
          href="Scrambled Eggs Source"
        >
          https://www.loveandlemons.com/scrambled-eggs-recipe/
        </a>
        <img
          alt="Scrambled Eggs"
          src="https://cdn.loveandlemons.com/wp-content/uploads/2021/05/scrambled-eggs-1024x641.jpg"
        />
      </div>

      <br />
      <></>

      <h2 className="text-center text-4xl">French Fries</h2>
      <div className="flex flex-wrap justify-center border-solid border-5">
        <p className="p-5 m-2 border-dotted border-3">
          Gather 2.5 pounds of peeled russet potatoes, 1 cup of vegetable oil, 1
          cup of all-purpose flour, 1 teaspoon of garlic salt, 1 teaspoon of
          onion salt, 1 teaspoon of paprika, 1 teaspoon of salt, and 0.5 cup of
          water. slice the potatoes and place in a large bowl of cold water.
          Heat oil in a saucepan to 350 degrees. Combine the flour, seasoning,
          and water in a large bowl. When batter is ready dip the slices and fry
          for 7 minutes.
        </p>
        <a className="p-5 m-2 border-dotted border-3" href="French Fries">
          https://www.allrecipes.com/recipe/50223/homemade-crispy-seasoned-french-fries/
        </a>
        <img
          alt="French Fries"
          src="https://www.allrecipes.com/thmb/bGeuG7WsA8m9N2v7sNLy0cmJZiY=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/50223-homemade-crispy-seasoned-french-fries-DDMFS-4x3-4e3f07ae55c9474abc0e4ce601c33eda.jpg"
        />
      </div>
    </div>
  );
}
