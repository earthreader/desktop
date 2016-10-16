export interface Subscription {
    type: 'subscription';
    label: string;
}

export interface Category {
    type: 'category';
    label: string;
    children: Feed[];
}

export type Feed = Subscription | Category;
