export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "13.0.4"
  }
  public: {
    Tables: {
      blog_posts: {
        Row: {
          author_name: string | null
          category: string | null
          content: string
          created_at: string
          excerpt: string | null
          featured_image_url: string | null
          id: string
          meta_description: string | null
          meta_title: string | null
          published: boolean | null
          published_at: string | null
          tags: string[] | null
          title: string
          updated_at: string
        }
        Insert: {
          author_name?: string | null
          category?: string | null
          content: string
          created_at?: string
          excerpt?: string | null
          featured_image_url?: string | null
          id?: string
          meta_description?: string | null
          meta_title?: string | null
          published?: boolean | null
          published_at?: string | null
          tags?: string[] | null
          title: string
          updated_at?: string
        }
        Update: {
          author_name?: string | null
          category?: string | null
          content?: string
          created_at?: string
          excerpt?: string | null
          featured_image_url?: string | null
          id?: string
          meta_description?: string | null
          meta_title?: string | null
          published?: boolean | null
          published_at?: string | null
          tags?: string[] | null
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      contact_inquiries: {
        Row: {
          created_at: string
          email: string
          id: string
          inquiry_type: string | null
          message: string
          name: string
          phone: string | null
          property_id: string | null
          source: string | null
          status: Database["public"]["Enums"]["inquiry_status"] | null
          updated_at: string
        }
        Insert: {
          created_at?: string
          email: string
          id?: string
          inquiry_type?: string | null
          message: string
          name: string
          phone?: string | null
          property_id?: string | null
          source?: string | null
          status?: Database["public"]["Enums"]["inquiry_status"] | null
          updated_at?: string
        }
        Update: {
          created_at?: string
          email?: string
          id?: string
          inquiry_type?: string | null
          message?: string
          name?: string
          phone?: string | null
          property_id?: string | null
          source?: string | null
          status?: Database["public"]["Enums"]["inquiry_status"] | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "contact_inquiries_property_id_fkey"
            columns: ["property_id"]
            isOneToOne: false
            referencedRelation: "properties"
            referencedColumns: ["id"]
          },
        ]
      }
      emi_calculator_presets: {
        Row: {
          created_at: string
          default_interest_rate: number
          default_tenure_years: number
          id: string
          interest_rate_max: number
          interest_rate_min: number
          loan_amount_max: number
          loan_amount_min: number
          property_id: string | null
          tenure_years_max: number
          tenure_years_min: number
        }
        Insert: {
          created_at?: string
          default_interest_rate: number
          default_tenure_years: number
          id?: string
          interest_rate_max: number
          interest_rate_min: number
          loan_amount_max: number
          loan_amount_min: number
          property_id?: string | null
          tenure_years_max: number
          tenure_years_min: number
        }
        Update: {
          created_at?: string
          default_interest_rate?: number
          default_tenure_years?: number
          id?: string
          interest_rate_max?: number
          interest_rate_min?: number
          loan_amount_max?: number
          loan_amount_min?: number
          property_id?: string | null
          tenure_years_max?: number
          tenure_years_min?: number
        }
        Relationships: []
      }
      newsletter_subscriptions: {
        Row: {
          created_at: string
          email: string
          id: string
          name: string | null
          source: string | null
          subscribed: boolean | null
          updated_at: string
        }
        Insert: {
          created_at?: string
          email: string
          id?: string
          name?: string | null
          source?: string | null
          subscribed?: boolean | null
          updated_at?: string
        }
        Update: {
          created_at?: string
          email?: string
          id?: string
          name?: string | null
          source?: string | null
          subscribed?: boolean | null
          updated_at?: string
        }
        Relationships: []
      }
      payment_plans: {
        Row: {
          booking_amount: number | null
          created_at: string
          description: string | null
          down_payment_percentage: number | null
          id: string
          loan_percentage: number | null
          milestones: Json
          plan_name: string
          property_id: string
          total_amount: number
          updated_at: string
        }
        Insert: {
          booking_amount?: number | null
          created_at?: string
          description?: string | null
          down_payment_percentage?: number | null
          id?: string
          loan_percentage?: number | null
          milestones: Json
          plan_name: string
          property_id: string
          total_amount: number
          updated_at?: string
        }
        Update: {
          booking_amount?: number | null
          created_at?: string
          description?: string | null
          down_payment_percentage?: number | null
          id?: string
          loan_percentage?: number | null
          milestones?: Json
          plan_name?: string
          property_id?: string
          total_amount?: number
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "fk_payment_plans_property"
            columns: ["property_id"]
            isOneToOne: false
            referencedRelation: "properties"
            referencedColumns: ["id"]
          },
        ]
      }
      project_updates: {
        Row: {
          created_at: string
          description: string
          id: string
          image_url: string | null
          is_featured: boolean | null
          property_id: string
          title: string
          update_date: string
          update_type: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          description: string
          id?: string
          image_url?: string | null
          is_featured?: boolean | null
          property_id: string
          title: string
          update_date: string
          update_type: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          description?: string
          id?: string
          image_url?: string | null
          is_featured?: boolean | null
          property_id?: string
          title?: string
          update_date?: string
          update_type?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "fk_project_updates_property"
            columns: ["property_id"]
            isOneToOne: false
            referencedRelation: "properties"
            referencedColumns: ["id"]
          },
        ]
      }
      properties: {
        Row: {
          address: string | null
          amenities: string[] | null
          area_sqft: number | null
          available_units: number | null
          bathrooms: number | null
          bedrooms: number | null
          brochure_url: string | null
          connectivity_details: string[] | null
          created_at: string
          description: string | null
          featured: boolean | null
          id: string
          latitude: number | null
          location: Database["public"]["Enums"]["location_type"]
          longitude: number | null
          main_image_url: string | null
          nearby_landmarks: Json | null
          possession_date: string | null
          price: number
          price_per_sqft: number | null
          project_highlights: string[] | null
          property_type: Database["public"]["Enums"]["property_type"]
          rera_certificate_url: string | null
          rera_id: string | null
          status: Database["public"]["Enums"]["property_status"] | null
          title: string
          total_area_acres: number | null
          total_units: number | null
          updated_at: string
          video_tour_url: string | null
          virtual_tour_url: string | null
        }
        Insert: {
          address?: string | null
          amenities?: string[] | null
          area_sqft?: number | null
          available_units?: number | null
          bathrooms?: number | null
          bedrooms?: number | null
          brochure_url?: string | null
          connectivity_details?: string[] | null
          created_at?: string
          description?: string | null
          featured?: boolean | null
          id?: string
          latitude?: number | null
          location: Database["public"]["Enums"]["location_type"]
          longitude?: number | null
          main_image_url?: string | null
          nearby_landmarks?: Json | null
          possession_date?: string | null
          price: number
          price_per_sqft?: number | null
          project_highlights?: string[] | null
          property_type: Database["public"]["Enums"]["property_type"]
          rera_certificate_url?: string | null
          rera_id?: string | null
          status?: Database["public"]["Enums"]["property_status"] | null
          title: string
          total_area_acres?: number | null
          total_units?: number | null
          updated_at?: string
          video_tour_url?: string | null
          virtual_tour_url?: string | null
        }
        Update: {
          address?: string | null
          amenities?: string[] | null
          area_sqft?: number | null
          available_units?: number | null
          bathrooms?: number | null
          bedrooms?: number | null
          brochure_url?: string | null
          connectivity_details?: string[] | null
          created_at?: string
          description?: string | null
          featured?: boolean | null
          id?: string
          latitude?: number | null
          location?: Database["public"]["Enums"]["location_type"]
          longitude?: number | null
          main_image_url?: string | null
          nearby_landmarks?: Json | null
          possession_date?: string | null
          price?: number
          price_per_sqft?: number | null
          project_highlights?: string[] | null
          property_type?: Database["public"]["Enums"]["property_type"]
          rera_certificate_url?: string | null
          rera_id?: string | null
          status?: Database["public"]["Enums"]["property_status"] | null
          title?: string
          total_area_acres?: number | null
          total_units?: number | null
          updated_at?: string
          video_tour_url?: string | null
          virtual_tour_url?: string | null
        }
        Relationships: []
      }
      property_images: {
        Row: {
          alt_text: string | null
          created_at: string
          id: string
          image_url: string
          order_index: number | null
          property_id: string
        }
        Insert: {
          alt_text?: string | null
          created_at?: string
          id?: string
          image_url: string
          order_index?: number | null
          property_id: string
        }
        Update: {
          alt_text?: string | null
          created_at?: string
          id?: string
          image_url?: string
          order_index?: number | null
          property_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "property_images_property_id_fkey"
            columns: ["property_id"]
            isOneToOne: false
            referencedRelation: "properties"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      inquiry_status: "new" | "contacted" | "qualified" | "converted" | "closed"
      location_type:
        | "delhi"
        | "gurgaon"
        | "mumbai"
        | "goa"
        | "faridabad"
        | "noida"
        | "ghaziabad"
      property_status: "active" | "sold" | "pending" | "draft"
      property_type:
        | "residential"
        | "commercial"
        | "luxury_apartment"
        | "villa"
        | "farmhouse"
        | "plot"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      inquiry_status: ["new", "contacted", "qualified", "converted", "closed"],
      location_type: [
        "delhi",
        "gurgaon",
        "mumbai",
        "goa",
        "faridabad",
        "noida",
        "ghaziabad",
      ],
      property_status: ["active", "sold", "pending", "draft"],
      property_type: [
        "residential",
        "commercial",
        "luxury_apartment",
        "villa",
        "farmhouse",
        "plot",
      ],
    },
  },
} as const
