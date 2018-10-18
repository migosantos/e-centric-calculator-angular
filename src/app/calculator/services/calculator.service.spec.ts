import { TestBed } from '@angular/core/testing';

import { CalculatorService } from './calculator.service';

describe('CalculatorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CalculatorService = TestBed.get(CalculatorService);
    expect(service).toBeTruthy();
  });

  it('should add correctly', () => {
    const service: CalculatorService = TestBed.get(CalculatorService);
    expect(service.compute("1+1")).toBe(2);
  });
  
  it('should add decimals correctly', () => {
    const service: CalculatorService = TestBed.get(CalculatorService);
    expect(service.compute("5.1+1.7")).toBe(6.8);
  });

  it('should subtract correctly', () => {
    const service: CalculatorService = TestBed.get(CalculatorService);
    expect(service.compute("5-2")).toBe(3);
  });

  it('should subtract decimals correctly', () => {
    const service: CalculatorService = TestBed.get(CalculatorService);
    expect(service.compute("5-3.2")).toBeCloseTo(1.80);
  });

  it('should multiply correctly', () => {
    const service: CalculatorService = TestBed.get(CalculatorService);
    expect(service.compute("5*5")).toBe(25);
  });

  it('should multiply decimals correctly', () => {
    const service: CalculatorService = TestBed.get(CalculatorService);
    expect(service.compute("3.5*3")).toBe(10.5);
  });

  it('should divide correctly', () => {
    const service: CalculatorService = TestBed.get(CalculatorService);
    expect(service.compute("24/3")).toBe(8);
  });

  it('should divide decimals correctly', () => {
    const service: CalculatorService = TestBed.get(CalculatorService);
    expect(service.compute("9.9/3")).toBeCloseTo(3.3);
  });

  it('should do exponential power correctly', () => {
    const service: CalculatorService = TestBed.get(CalculatorService);
    expect(service.compute("3^3")).toBe(27);
  });

  it('should do square root correctly', () => {
    const service: CalculatorService = TestBed.get(CalculatorService);
    expect(service.doUnaryOperation("sqrt", 9)).toBe(3);
  });
});
