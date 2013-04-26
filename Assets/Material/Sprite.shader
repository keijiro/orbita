Shader "Custom/Sprite" {
	Properties {
		_MainTex ("Base (RGBA)", 2D) = "white" {}
		_Color ("Color (RGBA)", Color) = (1, 1, 1, 1)
	}
	SubShader {
		Tags { "RenderType"="Transparent" }
		
		Pass {
			Blend SrcAlpha OneMinusSrcAlpha

			CGPROGRAM
	
			#pragma vertex vert
			#pragma fragment frag
			#include "UnityCG.cginc"

			sampler2D _MainTex;
			fixed4 _Color;

			struct v2f {
				float4 pos : SV_POSITION;
				float2 uv : TEXCOORD0;
			};

			float4 _MainTex_ST;

			v2f vert(appdata_base v) {
				v2f o;
				o.pos = mul(UNITY_MATRIX_MVP, v.vertex);
				o.uv = TRANSFORM_TEX(v.texcoord, _MainTex);
				return o;
			}

			fixed4 frag(v2f i) : COLOR0 {
			    half4 texcol = tex2D (_MainTex, i.uv);
			    return texcol * _Color;
			}
			ENDCG
		}
	} 
}
