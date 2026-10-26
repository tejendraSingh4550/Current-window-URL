import { Component } from '@angular/core';

type Destination = { name: string; country: string; days: string; price: number; category: string; image: string; tag?: string };

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
})
export class AppComponent {
  activeCategory = 'All trips';
  searchOpen = false;
  mobileMenuOpen = false;
  saved = new Set<string>();
  categories = ['All trips', 'Coast & islands', 'Mountains', 'Slow living'];
  destinations: Destination[] = [
    { name: 'The quiet side of Bali', country: 'Indonesia', days: '8 days', price: 1_240, category: 'Coast & islands', image: 'photo-1537996194471-e657df975ab4', tag: 'MOST LOVED' },
    { name: 'Where the wild things are', country: 'Dolomites, Italy', days: '6 days', price: 1_680, category: 'Mountains', image: 'photo-1519681393784-d120267933ba' },
    { name: 'A slower kind of summer', country: 'Amalfi Coast, Italy', days: '5 days', price: 1_450, category: 'Slow living', image: 'photo-1533105079780-92b9be482077' }
  ];

  get visibleDestinations(): Destination[] {
    return this.activeCategory === 'All trips' ? this.destinations : this.destinations.filter(item => item.category === this.activeCategory);
  }

  toggleSave(name: string): void {
    this.saved.has(name) ? this.saved.delete(name) : this.saved.add(name);
    this.saved = new Set(this.saved);
  }

  imageUrl(id: string, width = 900): string {
    return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`;
  }
}
