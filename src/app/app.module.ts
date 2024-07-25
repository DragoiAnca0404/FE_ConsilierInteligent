import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { OnboardPageComponent } from './student/main-page/components/onboard-page/onboard-page.component';
import { HeaderComponent } from './student/main-page/components/header/header.component';
import { SliderComponent } from './student/main-page/components/slider/slider.component';
import { ExperienceSectionComponent } from './student/main-page/components/experience-section/experience-section.component';
import { CategorySectionComponent } from './student/main-page/components/category-section/category-section.component';
import { FreelanceSectionComponent } from './student/main-page/components/freelance-section/freelance-section.component';
import { ClientSectionComponent } from './student/main-page/components/client-section/client-section.component';
import { InfoSectionComponent } from './student/main-page/components/info-section/info-section.component';
import { FooterComponent } from './student/main-page/components/footer/footer.component';
import { AboutSectionComponent } from './student/main-page/components/about-section/about-section.component';
import { SharedModule } from './shared.module';
import { AuthGuard } from './main/guards/auth.guard';
import { UserIsLoginGuard } from './main/guards/user-is-login.guard';
import { DatePipe } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './main/login/login.component';
import { RoleService } from './main/services/role.service';
import { SelectQuizSectionComponent } from './student/quiz/components/select-quiz-section/select-quiz-section.component';
import { SelectAQuizComponent } from './student/quiz/components/select-a-quiz/select-a-quiz.component';
import { PassionBasedQuizComponent } from './student/quiz/components/passion-based-quiz/passion-based-quiz.component';
import { HollandQuizComponent } from './student/quiz/components/holland-quiz/holland-quiz.component';
import { ResumeComponent } from './student/quiz/components/resume/resume.component';
import { MapHollandTheoryComponent } from './student/map-Holland/components/map-holland-theory/map-holland-theory.component';
import { InfoPersonalitateComponent } from './student/map-Holland/components/info-personalitate/info-personalitate.component';
import { CreareTestNouComponent } from './consilier/adauga_test_nou/components/creare-test-nou/creare-test-nou.component';
import { FormAdaugaTestComponent } from './consilier/adauga_test_nou/components/form-adauga-test/form-adauga-test.component';
import { FinalizareCreareTestSuccesComponent } from './consilier/adauga_test_nou/components/finalizare-creare-test-succes/finalizare-creare-test-succes.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    OnboardPageComponent,
    HeaderComponent,
    SliderComponent,
    ExperienceSectionComponent,
    CategorySectionComponent,
    FreelanceSectionComponent,
    ClientSectionComponent,
    InfoSectionComponent,
    FooterComponent,
    AboutSectionComponent,
    SelectQuizSectionComponent,
    SelectAQuizComponent,
    PassionBasedQuizComponent,
    HollandQuizComponent,
    ResumeComponent,
    MapHollandTheoryComponent,
    InfoPersonalitateComponent,
    CreareTestNouComponent,
    FormAdaugaTestComponent,
    FinalizareCreareTestSuccesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [AuthGuard, UserIsLoginGuard, DatePipe, RoleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
