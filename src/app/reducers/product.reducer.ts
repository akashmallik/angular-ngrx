import {Action} from '@ngrx/store';
import { Product } from '../models/product.model';
import * as ProductActions from '../actions/product.actions';

const initialState: Product = {
    name: 'Samsung Galaxy',
    model: 'S10',
    brand: 'Samsung',
    price: 95000,
    image: 'https://image-us.samsung.com/SamsungUS/mobile/phones/06102019-new/First_S10_Lockup1_Blue_gallery.jpg',
    specifications: 'The phone is powered by Octa core processor.'
};

export function reducer(state: Product[] = [initialState], action: ProductActions.Actions) {

    switch (action.type) {
        case ProductActions.ADD_PRODUCT:
            return [...state, action.payload];

        case ProductActions.REMOVE_PRODUCT:
            state.splice(action.payload, 1);
            return state;

        default:
            return state;
    }

}
