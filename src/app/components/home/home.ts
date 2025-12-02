import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [FormsModule, CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  public selectedExercise: string = '';
  public currentSupplements: string[] = [];

  public data = [
    { exercise: 'Musculação', supplements: ['Whey Protein', 'Creatina'] },
    { exercise: 'Corrida', supplements: ['Carboidratos complexos', 'Eletrólitos', 'Vitamina C'] },
    { exercise: 'Yoga', supplements: ['Ômega-3', 'Magnésio', 'Vitamina D'] },
    {
      exercise: 'Ciclismo',
      supplements: ['BCAA', 'Eletrólitos', 'Carboidratos de rápida absorção'],
    },
    { exercise: 'CrossFit', supplements: ['Creatina', 'Beta-Alanina', 'Proteína Isolada'] },
    { exercise: 'Pilates', supplements: ['Magnésio', 'Colágeno Tipo II', 'Ômega-3'] },
    { exercise: 'Natação', supplements: ['Eletrólitos', 'Carboidratos', 'Vitamina D'] },
    { exercise: 'HIIT', supplements: ['Cafeína', 'Beta-Alanina', 'Creatina'] },
    { exercise: 'Funcional', supplements: ['Whey Protein', 'BCAA', 'Glutamina'] },
    { exercise: 'Alongamento', supplements: ['Magnésio', 'Colágeno', 'Vitamina D'] },
    {
      exercise: 'Treino de Força Avançado',
      supplements: ['Creatina', 'Hipercalórico', 'Multivitamínico'],
    },
    {
      exercise: 'Treino de Resistência',
      supplements: ['Carboidratos Estruturados', 'Eletrólitos', 'BCAA'],
    },
    {
      exercise: 'Artes Marciais (Jiu-Jitsu, Muay Thai)',
      supplements: ['Whey Protein', 'Glutamina', 'Ômega-3'],
    },
    { exercise: 'Caminhada', supplements: ['Magnésio', 'Vitamina C', 'Complexo B'] },
    { exercise: 'Dança (Zumba, FitDance)', supplements: ['Eletrólitos', 'BCAA', 'Cafeína'] },
  ];

  public exercises: string[] = this.data.map((d) => d.exercise);

  public onSelect() {
    const item = this.data.find((d) => d.exercise === this.selectedExercise);
    this.currentSupplements = item ? item.supplements : [];
  }
}

