'use client';

import { useEffect, useState } from 'react';
import ImageCarousel from '../ui/ImageCarousel';
import ITSection from '../ui/ITSection';
import Container from '../ui/Container';

const heroImages = [
  {
    src: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgdmlld0JveD0iMCAwIDgwMCA2MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJncmFkMSIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMTAwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzY2N2VlYSIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzc2NGJhMiIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxyZWN0IHdpZHRoPSI4MDAiIGhlaWdodD0iNjAwIiBmaWxsPSJ1cmwoI2dyYWQxKSIvPjx0ZXh0IHg9IjQwMCIgeT0iMjUwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSJ3aGl0ZSIgZm9udC1zaXplPSIyNCIgZm9udC13ZWlnaHQ9ImJvbGQiPlRhbGVudExpbms8L3RleHQ+PHRleHQgeD0iNDAwIiB5PSIzMDAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IndoaXRlIiBmb250LXNpemU9IjQ4IiBmb250LXdlaWdodD0iYm9sZCI+ItKJ44KJ44GX44GV4oCdQ+OAgeaEj+mMi+WQiFGjg+aOoTwvdGV4dD48dGV4dCB4PSI0MDAiIHk9IjM2MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0id2hpdGUiIGZvbnQtc2l6ZT0iMTgiPuOCq+ODq+ODgeODo+ODvOOBjOS8nOOCii+OAgeeugeW/nOWkkOOBruOCueS8heS/oeOAgjwvdGV4dD48L3N2Zz4=',
    alt: 'TalentLink - らしさで、意気合う採用',
    title: 'TalentLink',
    category: 'HR Platform'
  },
  {
    src: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgdmlld0JveD0iMCAwIDgwMCA2MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJncmFkMiIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMTAwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzQzNGM1ZSIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzJkMzc0OCIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxyZWN0IHdpZHRoPSI4MDAiIGhlaWdodD0iNjAwIiBmaWxsPSJ1cmwoI2dyYWQyKSIvPjx0ZXh0IHg9IjQwMCIgeT0iMjUwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSJ3aGl0ZSIgZm9udC1zaXplPSIyNCIgZm9udC13ZWlnaHQ9ImJvbGQiPkRhdGFGbG93PC90ZXh0Pjx0ZXh0IHg9IjQwMCIgeT0iMzAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSJ3aGl0ZSIgZm9udC1zaXplPSI0OCIgZm9udC13ZWlnaHQ9ImJvbGQiPuaEj+aAnOaxuuWumuOCkuOAgeOCueOBj+ato+OBl+OBhOOAgjwvdGV4dD48dGV4dCB4PSI0MDAiIHk9IjM2MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0id2hpdGUiIGZvbnQtc2l6ZT0iMTgiPuimgeOBiOOCi+WMluOBi+OCieiHquWLleWMlumkmOOAgeOBsuOBqOe2mOOBjeOBqOOAgjwvdGV4dD48L3N2Zz4=',
    alt: 'DataFlow - 意思決定を、速く正しく',
    title: 'DataFlow',
    category: 'SaaS Platform'
  },
  {
    src: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgdmlld0JveD0iMCAwIDgwMCA2MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJncmFkMyIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMTAwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2Y3ZmFmYyIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iI2VkZjJmNyIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxyZWN0IHdpZHRoPSI4MDAiIGhlaWdodD0iNjAwIiBmaWxsPSJ1cmwoI2dyYWQzKSIvPjx0ZXh0IHg9IjQwMCIgeT0iMjUwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjMzc0MTUxIiBmb250LXNpemU9IjI0IiBmb250LXdlaWdodD0iYm9sZCI+VVJCQU5ERVNJR048L3RleHQ+PHRleHQgeD0iNDAwIiB5PSIzMDAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IiMzNzQxNTEiIGZvbnQtc2l6ZT0iNDgiIGZvbnQtd2VpZ2h0PSJib2xkIj7mnq/oibLjgavjgarjgovlu7rnrYnjgpLjgII8L3RleHQ+PHRleHQgeD0iNDAwIiB5PSIzNjAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IiMzNzQxNTEiIGZvbnQtc2l6ZT0iMTgiPuOCiOOCiuOBqOS+oeWApOOCkuOAgeOBqOOCguOBq+iCsuOBhuioreioiOOAgjwvdGV4dD48L3N2Zz4=',
    alt: 'URBANDESIGN - 景色になる建築を',
    title: 'URBANDESIGN',
    category: '不動産・建築'
  },
  {
    src: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgdmlld0JveD0iMCAwIDgwMCA2MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJncmFkNCIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMTAwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2Y5ZmJmZiIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iI2VkZjJmNyIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxyZWN0IHdpZHRoPSI4MDAiIGhlaWdodD0iNjAwIiBmaWxsPSJ1cmwoI2dyYWQ0KSIvPjx0ZXh0IHg9IjQwMCIgeT0iMjUwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjZmY5NTAwIiBmb250LXNpemU9IjI0IiBmb250LXdlaWdodD0iYm9sZCI+UHVyZUJlYXV0eTwvdGV4dD48dGV4dCB4PSI0MDAiIHk9IjMwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iIzM3NDE1MSIgZm9udC1zaXplPSI0OCIgZm9udC13ZWlnaHQ9ImJvbGQiPuOBguOBruiCjOOBjOOBu+W9ueOBq+OBquOCi+OAgjwvdGV4dD48dGV4dCB4PSI0MDAiIHk9IjM2MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iIzM3NDE1MSIgZm9udC1zaXplPSIxOCI+aOOCieOBleOBq+mbsOOCiumBuuOBp+OAgeOBpuOBhOOBquOBhOOCseOCouOAgjwvdGV4dD48L3N2Zz4=',
    alt: 'PureBeauty - 素肌が主役になる',
    title: 'PureBeauty',
    category: '美容・エステ'
  },
  {
    src: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgdmlld0JveD0iMCAwIDgwMCA2MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJncmFkNSIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMTAwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzJkMzc0OCIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzFhMjAyYyIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxyZWN0IHdpZHRoPSI4MDAiIGhlaWdodD0iNjAwIiBmaWxsPSJ1cmwoI2dyYWQ1KSIvPjx0ZXh0IHg9IjQwMCIgeT0iMjUwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSJ3aGl0ZSIgZm9udC1zaXplPSIyNCIgZm9udC13ZWlnaHQ9ImJvbGQiPkJvbiBBcHBldGl0PC90ZXh0Pjx0ZXh0IHg9IjQwMCIgeT0iMzAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSJ3aGl0ZSIgZm9udC1zaXplPSI0OCIgZm9udC13ZWlnaHQ9ImJvbGQiPuS4gOezv+OBp+OAgeiomIaGaUPjgavmiYvjgZnjgII8L3RleHQ+PHRleHQgeD0iNDAwIiB5PSIzNjAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IndoaXRlIiBmb250LXNpemU9IjE4Ij7prZnjgonjgYvjgonkvZnpnZ7jgb7jgafjgIHkvZPpqJPjgaflkbPjgo7jgYbph6/jgII8L3RleHQ+PC9zdmc+',
    alt: 'Bon Appetit - 一皿で、記憶に残す',
    title: 'Bon Appetit',
    category: 'レストラン・カフェ'
  },
  {
    src: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgdmlld0JveD0iMCAwIDgwMCA2MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJncmFkNiIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMTAwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzE5MmU0NSIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzBmMTcyOSIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxyZWN0IHdpZHRoPSI4MDAiIGhlaWdodD0iNjAwIiBmaWxsPSJ1cmwoI2dyYWQ2KSIvPjx0ZXh0IHg9IjQwMCIgeT0iMjAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSJ3aGl0ZSIgZm9udC1zaXplPSIyNCIgZm9udC13ZWlnaHQ9ImJvbGQiPlByZWNpc2lvbldvcmtzPC90ZXh0Pjx0ZXh0IHg9IjQwMCIgeT0iMjgwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSJ3aGl0ZSIgZm9udC1zaXplPSI0OCIgZm9udC13ZWlnaHQ9ImJvbGQiPue4veiAlOOBr+OAgeS/oei9oeOBq+OBquOCi+OAgjwvdGV4dD48dGV4dCB4PSI0MDAiIHk9IjM0MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0id2hpdGUiIGZvbnQtc2l6ZT0iNDgiIGZvbnQtd2VpZ2h0PSJib2xkIj7mnKrmnaXjgpLli5XjgYvjgZnln7rpgKTjgpLjgIHpnZnjgII8L3RleHQ+PHRleHQgeD0iNDAwIiB5PSI0MDAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IndoaXRlIiBmb250LXNpemU9IjE4Ij7kuIDjgaTjga7pg6jlk4HjgYvjgonjgIHkuJbnlYzjga7lk4HlvbLjgpLjgII8L3RleHQ+PC9zdmc+',
    alt: 'PrecisionWorks - 精度は、信頼になる',
    title: 'PrecisionWorks',
    category: '製造業'
  },
  {
    src: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgdmlld0JveD0iMCAwIDgwMCA2MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJncmFkNyIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMTAwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzBmMmM1YyIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzBhMTkyZiIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxyZWN0IHdpZHRoPSI4MDAiIGhlaWdodD0iNjAwIiBmaWxsPSJ1cmwoI2dyYWQ3KSIvPjx0ZXh0IHg9IjQwMCIgeT0iMjUwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSJ3aGl0ZSIgZm9udC1zaXplPSIyNCIgZm9udC13ZWlnaHQ9ImJvbGQiPlRlY2hDb3JlPC90ZXh0Pjx0ZXh0IHg9IjQwMCIgeT0iMzAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSJ3aGl0ZSIgZm9udC1zaXplPSI0OCIgZm9udC13ZWlnaHQ9ImJvbGQiPuacquadpeOCkOWLleOBi+OBmeeugOOCkuOAgemdkzwvdGV4dD48dGV4dCB4PSI0MDAiIHk9IjM2MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0id2hpdGUiIGZvbnQtc2l6ZT0iNDgiIGZvbnQtd2VpZ2h0PSJib2xkIj7jgYvjgavlvLfjgY/jgII8L3RleHQ+PHRleHQgeD0iNDAwIiB5PSI0MjAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IndoaXRlIiBmb250LXNpemU9IjE4Ij7kuovmpa3jgpLmlK/jgYjjgovjgqTjg7Pjg5Pjg6njgajjgIHmiJDplbfjgpLlsJTjgY/oqK3oqIjjgII8L3RleHQ+PC9zdmc+',
    alt: 'TechCore - 未来を動かす基盤を、静かに強く',
    title: 'TechCore',
    category: 'コーポレートIT'
  },
  {
    src: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgdmlld0JveD0iMCAwIDgwMCA2MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJncmFkOCIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMTAwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2Y3ZmFmYyIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iI2VkZjJmNyIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxyZWN0IHdpZHRoPSI4MDAiIGhlaWdodD0iNjAwIiBmaWxsPSJ1cmwoI2dyYWQ4KSIvPjx0ZXh0IHg9IjQwMCIgeT0iMjUwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjMmQ0MTUzIiBmb250LXNpemU9IjI0IiBmb250LXdlaWdodD0iYm9sZCI+Q2FyZUZpcnN0PC90ZXh0Pjx0ZXh0IHg9IjQwMCIgeT0iMzAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjMmQ0MTUzIiBmb250LXNpemU9IjQ4IiBmb250LXdlaWdodD0iYm9sZCI+44G+44Gj44GZ44GQ44CB44GC44Gq44Gf44Gu5YG16Lqt44G4PC90ZXh0Pjx0ZXh0IHg9IjQwMCIgeT0iMzYwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjMmQ0MTUzIiBmb250LXNpemU9IjE4Ij7moLnloY7jgYLjgovoiLfnmYLkvZPppJPjgpLjgIHjgoTjgZXjgZfjgYTlsObnt5pjgafjgII8L3RleHQ+PC9zdmc+',
    alt: 'CareFirst - まっすぐ、あなたの健康へ',
    title: 'CareFirst',
    category: '医療'
  },
  {
    src: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgdmlld0JveD0iMCAwIDgwMCA2MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJncmFkOSIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMTAwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2ZmOTUwMCIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iI2ZmNzAwMCIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxyZWN0IHdpZHRoPSI4MDAiIGhlaWdodD0iNjAwIiBmaWxsPSJ1cmwoI2dyYWQ5KSIvPjx0ZXh0IHg9IjQwMCIgeT0iMjMwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSJ3aGl0ZSIgZm9udC1zaXplPSIyNCIgZm9udC13ZWlnaHQ9ImJvbGQiPlN0eWxlQXZlbnVlPC90ZXh0Pjx0ZXh0IHg9IjQwMCIgeT0iMjkwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSJ3aGl0ZSIgZm9udC1zaXplPSI0MiIgZm9udC13ZWlnaHQ9ImJvbGQiPuS7iuaXpeOBruKAmOWlveOBjeKAmegDgCjjgIE8L3RleHQ+PHRleHQgeD0iNDAwIiB5PSIzNDAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IndoaXRlIiBmb250LXNpemU9IjQyIiBmb250LXdlaWdodD0iYm9sZCI+5piO5pel44Gu44K544K/44Kk44Or44CCPCt0ZXh0Pjx0ZXh0IHg9IjQwMCIgeT0iMzkwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSJ3aGl0ZSIgZm9udC1zaXplPSIxOCI+5paw5L2c44GL44KJ5a6a55Wq44G+44GfjgIHlv4Djgosf5YuV44GP44K744Os44Kv44OI44CCPCx0ZXh0Pjwvc3ZnPgo=',
    alt: 'StyleAvenue - 今日の好きが、明日のスタイル',
    title: 'StyleAvenue',
    category: 'ファッション'
  }
];

export default function HeroCarousel() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('hero-carousel');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <ITSection variant="light" size="xl" id="hero-carousel">
      <Container size="xl">
        <div className="text-center mb-16">
          <h2 className={`text-5xl font-bold tracking-tight text-gray-900 mb-8 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Design Gallery
          </h2>
          <p className={`text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            実際に手がけたヒーローセクションのデザインコレクション
          </p>
        </div>

        <div className={`transition-all duration-1000 delay-400 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="aspect-[16/10] max-w-5xl mx-auto">
            <ImageCarousel 
              images={heroImages}
              autoplay={true}
              interval={5000}
              className="w-full h-full"
            />
          </div>
        </div>

        {/* Additional info */}
        <div className={`mt-12 text-center transition-all duration-1000 delay-600 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <p className="text-gray-500 text-sm">
            各業界に特化したヒーローデザイン • 自動再生停止：ホバー時 • クリックで手動操作
          </p>
        </div>
      </Container>
    </ITSection>
  );
}