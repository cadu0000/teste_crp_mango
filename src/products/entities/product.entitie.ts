export class Product {
    private readonly _id: number;
    private readonly _title: string;
    private readonly _price: number;
    private readonly _description: string;
    private readonly _category: string;
    private readonly _image: string;

    constructor(
        id: number,
        title: string,
        price: number,
        description: string,
        category: string,
        image: string,
    ) {
        this._id = id;
        this._title = title;
        this._price = price;
        this._description = description;
        this._category = category;
        this._image = image;
    }

    get id() {
        return this._id;
    }

    get title() {
        return this._title;
    }

    get price() {
        return this._price;
    }

    get description() {
        return this._description;
    }

    get category() {
        return this._category;
    }

    get image() {
        return this._image;
    }

    static create(props: {
        id: number,
        title: string,
        price: number,
        description: string,
        category: string,
        image: string,
    }) {
        return new Product(
            props.id,
            props.title,
            props.price,
            props.description,
            props.category,
            props.image,
        );
    }
}
