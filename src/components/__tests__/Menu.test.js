import { render,waitFor , fireEvent} from "@testing-library/react";
import RestrauntMenu from "../RestrauntMenu";
import { Provider } from "react-redux";
import store from "../../utils/store";
import {StaticRouter} from "react-router-dom/server";
import {MENU_DATA} from "../../mocks/data";
import Header from "../Header";

global.fetch = jest.fn(async ()=>{
   return Promise.resolve({
        json: ()=>{
            return Promise.resolve(MENU_DATA);
        },
    });
});

test("Add items to cart",async ()=>{
    const body = render(
        <StaticRouter>
            <Provider store={store}>
                <Header/>
                <RestrauntMenu/> 
            </Provider>
        </StaticRouter>
    );

    await waitFor(()=>expect(body.getByTestId("menu")));

   const addBtn= body.getByTestId("addBtn");

   fireEvent.click(addBtn[0]);

   const cart = body.getByTestId("cart");

    expect(cart.innerHTML).toBe("Cart-1 items");

});