import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { GlobalService } from '../../../services/global.service';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit, OnDestroy {

  @Input() product;

  products = [
    {
      id: '1',
      name: 'Casio Digital W-215H-1A',
      description: `- Hourly time signal
      - Auto-calendar (29 days for February)
      - 12/24-hour format
      - Regular timekeeping: Hour, minute, second, pm, date, day
      - Accuracy: 30 seconds per month
      - Battery: CR2016`,
      price: '₱758.00',
      image: 'https://ph-test-11.slatic.net/p/casio-unisex-black-resin-strap-unisex-watch-w-215h-1a-9604-8577755-ea61ef50e9cb69dcd50bbab02fba9f84-catalog.jpg_340x340q80.jpg_.webp'
    },
    {
      id: '2',
      name: 'Casio Classic Vintage Unisex',
      description: `Case / bezel material: Resin
      Resin Band
      Resin Glass
      Water Resistant
      LED light
      1/100-second stopwatchMeasuring capacity: 59'59.99"Measuring modes: Net time, split time, 1st-2nd place times`,
      price: '₱619.00',
      image: 'https://ph-test-11.slatic.net/p/9ad4bdc6ff31d55540440caa99a62d86.jpg_340x340q80.jpg_.webp'
    },
    {
      id: '3',
      name: 'Unisex Silver Stainless Steel Strap',
      description: `Highlights and Specifications
      - Resin Glass
      - Water resistance: 5 atm
      - Case / bezel material: Resin
      - Resin Band
      - LED backlight
      - 1/100-second stopwatch`,
      price: '₱599.00',
      image: 'https://ph-test-11.slatic.net/original/a4a3fca7015ab9c128945f1a3b2a8a46.jpg_340x340q80.jpg_.webp'
    },
    {
      id: '4',
      name: 'Casio Ladies Classic Series Watch',
      description: `Case / bezel material: Resin
      Resin Band
      Resin Glass
      50-meter water resistance
      Dual time
      1/100-second stopwatchMeasuring capacity: 59'59.99''Measuring mode: Elapsed time`,
      price: '₱849.00',
      image: 'https://ph-test-11.slatic.net/p/ab6c673018692223ff812885dc36dd31.jpg_340x340q80.jpg_.webp'
    },
  ];

  selectedProduct;

  constructor(
    private router: ActivatedRoute,
    private globalService: GlobalService
  ) {
    console.log(router);
  }

  ngOnInit(): void {
    console.log(this.router.snapshot.params.id);
    this.router.params.subscribe((params: Params) => {
      const id = params.id;
      const selected = this.products.filter((product) => {
        return +product.id === +id;
      });
      
      if (selected.length > 0) {
        this.selectedProduct = selected[0];
        this.globalService.subjectTitle.next(this.selectedProduct.name);
        // this.globalService.subjectTitle.next(this.selectedProduct.name);
      }
    });
  }
  
  ngOnDestroy(): void {
    this.globalService.subjectTitle.next('');
  }
}
