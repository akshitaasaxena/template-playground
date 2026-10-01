import { describe, it, expect, beforeEach } from 'vitest';
import useAppStore from '../../store/store';

describe('useAppStore - editorFontSize', () => {
  beforeEach(() => {
    // Clear localStorage before each test
    localStorage.clear();
    // Reset the store to initial state
    useAppStore.setState({
      editorFontSize: 14,
    });
  });

  it('should have editorFontSize default to 14', () => {
    const state = useAppStore.getState();
    expect(state.editorFontSize).toBe(14);
  });

  it('should update editorFontSize when setEditorFontSize is called', () => {
    const store = useAppStore.getState();
    
    store.setEditorFontSize(18);
    
    expect(useAppStore.getState().editorFontSize).toBe(18);
  });

  it('should persist editorFontSize to localStorage', () => {
    const store = useAppStore.getState();
    
    store.setEditorFontSize(20);
    
    expect(localStorage.getItem('editorFontSize')).toBe('20');
  });

  it('should update editorFontSize correctly across multiple changes', () => {
    const store = useAppStore.getState();
    
    // Initially 14
    expect(useAppStore.getState().editorFontSize).toBe(14);
    
    // Set to 12
    store.setEditorFontSize(12);
    expect(useAppStore.getState().editorFontSize).toBe(12);
    
    // Set to 20
    store.setEditorFontSize(20);
    expect(useAppStore.getState().editorFontSize).toBe(20);
  });
});
