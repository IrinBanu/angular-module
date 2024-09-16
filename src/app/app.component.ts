import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PaymentsModule } from './payments/payments.module';
import { ProductsModule } from './products/products.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PaymentsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'product_crud';
}
