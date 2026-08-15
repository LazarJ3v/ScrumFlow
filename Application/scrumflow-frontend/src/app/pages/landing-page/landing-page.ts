import { Component } from '@angular/core';
import { Header } from "../../components/header/header";
import { Footer } from '../../components/footer/footer';
import { RouterLink } from '@angular/router';
import { TeamList } from "../../components/team-list/team-list";

@Component({
  selector: 'app-landing-page',
  imports: [Header, Footer, RouterLink, TeamList],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.css',
})
export class LandingPage {}
