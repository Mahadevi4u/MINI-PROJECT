import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[] = [
    new Product(1, "Black Sofa", "A sectional sofa is modular. It usually includes at least two pieces that can be arranged in multiple configurations. A sectional sofa often has the option to choose the arm position as either left or right, with two or no arms. The key benefit of a sectional sofa is the ability to tailor its components to a range of spaces.", 10999, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRdx3e0myfsUME03uV8g5keSrPOJAW9QJrug&usqp=CAU"),
    new Product(2, "White Sofa", "If a single piece of furniture has the ability to define the style of a personal living space, that piece would be the sofa. Available in a range of styles -- with a variety of functions -- a sofa can be functional or whimsical, period or contemporary, single or sectional. In each instance the sofa, as a signature object, defines the space in which it sits.", 11999, "http://cdn.home-designing.com/wp-content/uploads/2009/06/black-and-white-living-room.jpg"),
    new Product(3, "Balcony designs", "Balcony, external extension of an upper floor of a building, enclosed up to a height of about three feet (one metre) by a solid or pierced screen, by balusters (see also balustrade), or by railings.", 28999, "https://media.designcafe.com/wp-content/uploads/2020/06/18112758/nature-touch-small-open-balcony-ideas.jpg"),
    new Product(4, "Center-table", "Modern center table designs speak of a person who cares about and is in touch with the latest trends, whether in technology, furniture or clothes", 5899, "https://i.pinimg.com/736x/8c/55/24/8c5524cbf4e6ec61cfe6a40a8a1d9555.jpg"),
    new Product(5, "Modern Black sofa set", "The 'Modern' furniture style was defined between the 1920s and 50s, breaking away from the traditions of the pre-industrial revolution. With a focus on simplicity, modern sofas are usually made using natural materials including wood and leather and are often raised off the floor", 23999, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoFs9j05MmKpCRKDv3sZOJecJkhXXR7t-6Ng&usqp=CAU"),
    new Product(6, "Offie Wall Decor", "Decorating a wall with 3d paints and will be good for years and looks very attractive.", 7899, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQy76lgpVsP5-HBc5-ZkNJ78_Jxe0JOlh0CA&usqp=CAU"),
    new Product(7, "Pooja room designs", "If you love to keep things classy and elegant even in those divine corners, then these white pooja room designs are just perfect for you", 8999, "https://www.ideaainteriors.com/wp-content/uploads/2016/09/Untitled-2-22.jpg"),
    
    new Product(8, "To work,study", " This system table contains information on detached parts of MergeTree tables. The reason column specifies why the part was detached", 10999, "https://shop.static.ingka.ikea.com/category-images/Category_Tables-table-legs.jpg?imwidth=500"),
    new Product(9,"Dining Table","This dining table named Action is a versatile satin steel covered table that can accommodate up to 10 people thanks to its extendible glass top. A charming design and the possibility of choosing between a wide range of available finishes make the Action Dining table a strong candidate for your dining room. Producers from Arredamenti Diotti offer variations for the legs and surface of the table: the legs are available in satin steel, oak, wenge, black or white glossy lacquered, and leather in cream color, while the surface can be chosen to be a silk-screened tempered glass in black, coffee and extra white.",35999,"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgPfCuSHvBVC9znifOfKxO_J3GX2jrkcRUzg&usqp=CAU"),
    new Product(10, "Flower design Single Seater", "A very comfortable chair to sit you can keep it in balcony or in hall or where ever you like.The quality is awesome and you eill enjoy it definitely",15999,"https://media.architecturaldigest.com/photos/5e39c483c63e7d0009ada013/1:1/w_710,h_710,c_limit/phoebe-chair-botanic-collage-print-o.jpg"),
    new Product(11,"Table Mate","To make your work as easy as possible and feel comfor with this.This is height adjustable and length adjustable used for mulitple purposes and made with a teak wood.", 4899, "https://rukminim1.flixcart.com/image/416/416/kkfrjww0/portable-laptop-table/m/u/q/mdf-medium-density-fiber-cljs-10-01-furncentral-walnut-original-imafzrznmzuaqwvj.jpeg?q=70"),
    new Product(12, "Office Desk", "To keep all your laptop,mobile,decorative items,files etc.This is made in Germany and not adjustable and made with a good quality wood and had a oil painting to avoid rust and dust.", 5744,"https://www.ikea.com/in/en/images/products/skarsta-desk-sit-stand-white__0780162_pe759865_s5.jpg?f=s"),
    
    
  ]


  constructor() { }
  getProducts():Product[]{
    return this.products
  }
}
